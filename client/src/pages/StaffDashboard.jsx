import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { getDashboard } from "../services/authService";

const roleNames = {
  employee: "Nhân viên kinh doanh",
  technician: "Kỹ thuật viên",
  admin: "Quản trị viên",
};

function StaffDashboard() {
  const { token, user } = useAuth();
  const [status, setStatus] = useState("Đang xác minh quyền truy cập...");

  useEffect(() => {
    getDashboard(user.role, token)
      .then((data) => setStatus(data.message))
      .catch((error) => setStatus(error.message));
  }, [token, user.role]);

  return (
    <main className="workspace-page">
      <div className="container">
        <div className="page-heading">
          <span className="eyebrow">STAFF WORKSPACE</span>
          <h1>Khu vực nhân sự</h1>
          <p>
            Xin chào {user?.name} — {roleNames[user?.role] || user?.role}.
          </p>
        </div>
        <p className="api-status">{status}</p>
        <div className="workspace-grid">
          <article className="workspace-card">
            <span className="workspace-icon">▤</span>
            <h2>Quản lý khách hàng</h2>
            <p>Tiếp nhận và theo dõi thông tin khách hàng.</p>
            <span className="coming-soon">Sẽ mở rộng ở Sprint 6</span>
          </article>
          <article className="workspace-card">
            <span className="workspace-icon">◷</span>
            <h2>Công việc và lịch hẹn</h2>
            <p>Theo dõi công việc tư vấn, khảo sát và lắp đặt.</p>
            <span className="coming-soon">Sẽ mở rộng ở Sprint 4 và 6</span>
          </article>
          <article className="workspace-card">
            <span className="workspace-icon">⚙</span>
            <h2>Hỗ trợ kỹ thuật</h2>
            <p>Tiếp nhận yêu cầu và hỗ trợ sau bán hàng.</p>
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

export default StaffDashboard;
