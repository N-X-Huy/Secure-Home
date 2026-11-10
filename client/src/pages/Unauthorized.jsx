import { Link } from "react-router-dom";

function Unauthorized() {
  return (
    <main className="workspace-page">
      <div className="container empty-state">
        <h1>403 – Không có quyền truy cập</h1>
        <p>Tài khoản của bạn không được cấp quyền sử dụng chức năng này.</p>
        <Link className="btn btn-primary" to="/">
          Quay về trang chủ
        </Link>
      </div>
    </main>
  );
}

export default Unauthorized;
