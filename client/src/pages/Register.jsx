import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../services/authService";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Lưu dữ liệu người dùng nhập
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Lưu trạng thái xử lý và thông báo
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

  // Xử lý đăng ký
  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage("");
    setError("");

    // Kiểm tra mật khẩu xác nhận
    if (formData.password !== formData.confirmPassword) {
      setError("Mật khẩu xác nhận không khớp!");
      return;
    }

    try {
      setLoading(true);

      // Gửi dữ liệu đến Backend
      const result = await registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      setMessage(result.message);

      // Xóa dữ liệu sau khi đăng ký thành công
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
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
          <div className="auth-header">
            <h1>Tạo tài khoản</h1>
            <p>Đăng ký để trải nghiệm các giải pháp an ninh từ Secure Home.</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {/* Họ và tên */}
            <div className="form-group">
              <label htmlFor="name">Họ và tên</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nhập họ và tên"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

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
                  minLength={6}
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

            {/* Xác nhận mật khẩu */}
            <div className="form-group">
              <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>

              <div className="password-wrapper">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Nhập lại mật khẩu"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />

                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "Ẩn" : "Hiện"}
                </button>
              </div>
            </div>

            {/* Thông báo */}
            {error && <p className="auth-error">{error}</p>}

            {message && <p className="auth-success">{message}</p>}

            {/* Nút đăng ký */}
            <button type="submit" className="auth-submit" disabled={loading}>
              {loading ? "Đang đăng ký..." : "Đăng ký tài khoản"}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;
