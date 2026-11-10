import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser, logoutUser } from "../services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("user");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      localStorage.removeItem("user");
      return null;
    }
  });
  const [isAuthReady, setIsAuthReady] = useState(false);

  // Kiểm tra lại Token với Backend khi tải hoặc làm mới trang.
  useEffect(() => {
    let active = true;

    const verifySession = async () => {
      if (!token) {
        setIsAuthReady(true);
        return;
      }

      try {
        const result = await getCurrentUser(token);
        if (!active) return;
        setUser(result.user);
        localStorage.setItem("user", JSON.stringify(result.user));
      } catch {
        if (!active) return;
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setToken(null);
        setUser(null);
      } finally {
        if (active) setIsAuthReady(true);
      }
    };

    setIsAuthReady(false);
    verifySession();
    return () => {
      active = false;
    };
  }, [token]);

  const login = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    setToken(data.token);
    setUser(data.user);
    setIsAuthReady(true);
  };

  const logout = async () => {
    const currentToken = token;

    try {
      if (currentToken) {
        await logoutUser(currentToken);
      }
    } catch (error) {
      // Vẫn kết thúc phiên ở trình duyệt nếu máy chủ không phản hồi.
      console.error("Logout request failed:", error.message);
    } finally {
      // Luôn xóa dữ liệu phía trình duyệt, kể cả khi API logout gặp lỗi.
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setToken(null);
      setUser(null);
      setIsAuthReady(true);
    }
  };

  const value = {
    token,
    user,
    login,
    logout,
    isAuthReady,
    isLoggedIn: Boolean(token && user),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth phải được sử dụng bên trong AuthProvider.");
  }
  return context;
}
