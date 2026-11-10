import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { getDashboard } from "../services/authService";

function CustomerDashboard() {
  const { token, user } = useAuth();
  const [status, setStatus] = useState("Đang xác minh quyền truy cập...");

  useEffect(() => {
    getDashboard("customer", token)
      .then((data) => setStatus(data.message))
      .catch((error) => setStatus(error.message));
  }, [token]);

  return (
    <main className="workspace-page">
      <div className="container">
        <div className="page-heading">
          <span className="eyebrow">CUSTOMER CENTER</span>
          <h1>Xin chào, {user?.name}</h1>
          <p>Quản lý trải nghiệm mua sắm và các dịch vụ an ninh của bạn.</p>
        </div>
        <p className="api-status">{status}</p>
        <div className="workspace-grid">
          <article className="workspace-card">
            <span className="workspace-icon">▣</span>
            <h2>Đơn hàng của tôi</h2>
            <p>Theo dõi trạng thái các đơn hàng thiết bị an ninh.</p>
            <span className="coming-soon">Sẽ triển khai ở Sprint 3</span>
          </article>
          <article className="workspace-card">
            <span className="workspace-icon">⌂</span>
            <h2>Lịch tư vấn, lắp đặt</h2>
            <p>Quản lý lịch hẹn tư vấn và lắp đặt tại địa chỉ của bạn.</p>
            <span className="coming-soon">Sẽ triển khai ở Sprint 4</span>
          </article>
          <article className="workspace-card">
            <span className="workspace-icon">✓</span>
            <h2>Bảo hành và hỗ trợ</h2>
            <p>Tra cứu thông tin bảo hành và yêu cầu hỗ trợ kỹ thuật.</p>
            <span className="coming-soon">Sẽ triển khai ở Sprint 5</span>
          </article>
        </div>
        <Link className="btn btn-primary dashboard-link" to="/profile">
          Xem hồ sơ cá nhân
        </Link>
      </div>
    </main>
  );
}

export default CustomerDashboard;
