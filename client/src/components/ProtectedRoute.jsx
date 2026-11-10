import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute({ allowedRoles }) {
  const { isLoggedIn, isAuthReady, user } = useAuth();
  const location = useLocation();

  if (!isAuthReady) {
    return (
      <div className="route-loading">Đang kiểm tra phiên đăng nhập...</div>
    );
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
