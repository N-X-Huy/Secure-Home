const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const request = async (path, options = {}) => {
  const response = await fetch(`${API_URL}${path}`, options);
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Đã xảy ra lỗi. Vui lòng thử lại.");
  }

  return data;
};

const jsonOptions = (method, body) => ({
  method,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body),
});

export const registerUser = (userData) =>
  request("/auth/register", jsonOptions("POST", userData));

export const loginUser = (userData) =>
  request("/auth/login", jsonOptions("POST", userData));

export const logoutUser = (token) =>
  request("/auth/logout", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });

export const getCurrentUser = (token) =>
  request("/auth/me", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getDashboard = (path, token) =>
  request(`/dashboard/${path}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
