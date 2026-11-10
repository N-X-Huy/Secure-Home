import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import { useAuth } from "../contexts/AuthContext";

function Login() {
  // Lấy hàm login từ AuthContext
  const { login } = useAuth();
  const navigate = useNavigate();

  // Quản lý trạng thái hiện hoặc ẩn mật khẩu
  const [showPassword, setShowPassword] = useState(false);

  // Lưu thông tin người dùng nhập
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Quản lý trạng thái xử lý và thông báo
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Cập nhật dữ liệu khi người dùng nhập
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Xử lý đăng nhập
  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage("");
    setError("");

    try {
      setLoading(true);

      // Gửi email và mật khẩu đến Backend
      const result = await loginUser(formData);

      // Cập nhật trạng thái đăng nhập thông qua AuthContext
      login(result);
      navigate(result.user.role === "customer" ? "/account" : "/staff", {
        replace: true,
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          {/* Tiêu đề */}
          <div className="auth-header">
            <h1>Chào mừng trở lại!</h1>
            <p>Đăng nhập để tiếp tục sử dụng Secure Home.</p>
          </div>

          {/* Form đăng nhập */}
          <form className="auth-form" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Địa chỉ Email</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Nhập địa chỉ email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Mật khẩu */}
            <div className="form-group">
              <label htmlFor="password">Mật khẩu</label>

              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Nhập mật khẩu"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Ẩn" : "Hiện"}
                </button>
              </div>
            </div>

            {/* Ghi nhớ đăng nhập */}
            <div className="auth-options">
              <label className="remember-option">
                <input type="checkbox" />
                <span>Ghi nhớ đăng nhập</span>
              </label>

              <span className="forgot-password-note">
                Cần hỗ trợ? Liên hệ Secure Home
              </span>
            </div>

            {/* Thông báo */}
            {error && <p className="auth-error">{error}</p>}

            {message && <p className="auth-success">{message}</p>}

            {/* Nút đăng nhập */}
            <button type="submit" className="auth-submit" disabled={loading}>
              {loading ? "Đang đăng nhập..." : "Đăng nhập"}
            </button>
          </form>

          {/* Liên kết đăng ký */}
          <div className="auth-footer">
            <p>
              Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
