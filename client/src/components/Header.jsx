import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Header() {
  const { user, isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/", { replace: true });
  };

  const workspacePath = user?.role === "customer" ? "/account" : "/staff";

  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <div className="logo">
            <Link to="/">
              <h2>SECURE HOME</h2>
              <span>Smart Security Solutions</span>
            </Link>
          </div>

          <form
            className="search-box"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="search"
              aria-label="Tìm kiếm thiết bị"
              placeholder="Tìm kiếm thiết bị an ninh..."
            />
            <button type="submit">Tìm kiếm</button>
          </form>

          <div className="header-actions">
            {isLoggedIn ? (
              <>
                <Link to="/profile" className="user-greeting">
                  Xin chào, {user.name}
                </Link>
                <Link to={workspacePath}>Khu vực của tôi</Link>
                <button
                  type="button"
                  className="logout-button"
                  onClick={handleLogout}
                >
                  Đăng xuất
                </button>
              </>
            ) : (
              <>
                <Link to="/login">Đăng nhập</Link>
                <Link to="/register">Đăng ký</Link>
              </>
            )}
            <span className="header-placeholder">Giỏ hàng (Sprint 3)</span>
          </div>
        </div>
      </div>

      <nav className="navbar" aria-label="Điều hướng chính">
        <div className="container">
          <Link to="/">Trang chủ</Link>
          <Link to="/products">Sản phẩm</Link>
          <Link to="/solutions">Giải pháp an ninh</Link>
          <Link to="/services">Dịch vụ</Link>
          <Link to="/about">Giới thiệu</Link>
          <Link to="/contact">Liên hệ</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
