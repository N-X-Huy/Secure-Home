import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            {/* Nội dung giới thiệu */}
            <div className="hero-text">
              <span className="hero-label">GIẢI PHÁP AN NINH THÔNG MINH</span>

              <h1>
                An tâm bảo vệ –<span> Trọn vẹn từng khoảnh khắc</span>
              </h1>

              <p>
                Secure Home cung cấp các thiết bị an ninh hiện đại cùng giải
                pháp tư vấn, lắp đặt và bảo vệ an toàn cho gia đình, doanh
                nghiệp.
              </p>

              <div className="hero-buttons">
                <Link to="/products" className="btn btn-primary">
                  Khám phá sản phẩm
                </Link>

                <Link to="/solutions" className="btn btn-outline">
                  Tư vấn giải pháp
                </Link>
              </div>
            </div>

            {/* Khu vực hình ảnh minh họa */}
            <div className="hero-visual">
              <div className="hero-visual-card">
                <span className="hero-icon">⌂</span>
                <h3>SECURE HOME</h3>
                <p>Smart Security System</p>
                <div className="security-status">
                  <span></span>
                  Hệ thống đang bảo vệ
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
