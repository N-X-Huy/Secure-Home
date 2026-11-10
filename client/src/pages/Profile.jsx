import { useAuth } from "../contexts/AuthContext";

const roleNames = {
  customer: "Khách hàng",
  employee: "Nhân viên kinh doanh",
  technician: "Kỹ thuật viên",
  admin: "Quản trị viên",
};

function Profile() {
  const { user } = useAuth();

  return (
    <main className="workspace-page">
      <div className="container">
        <div className="page-heading">
          <span className="eyebrow">TÀI KHOẢN CỦA BẠN</span>
          <h1>Hồ sơ cá nhân</h1>
          <p>Thông tin tài khoản đang sử dụng trên Secure Home.</p>
        </div>

        <section className="profile-card">
          <div className="profile-avatar">
            {(user?.name || "U").trim().charAt(0).toUpperCase()}
          </div>
          <div className="profile-details">
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
            <span className="role-chip">
              {roleNames[user?.role] || user?.role}
            </span>
          </div>
          <div className="profile-note">
            <strong>Trạng thái tài khoản</strong>
            <span className="status-active">Đang đăng nhập</span>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Profile;
