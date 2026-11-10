function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <h3>SECURE HOME</h3>
          <p>Smart Security Solutions</p>
          <p>Giải pháp an ninh thông minh cho gia đình và doanh nghiệp.</p>
        </div>
        <div>
          <h4>Hỗ trợ khách hàng</h4>
          <p>Tư vấn lựa chọn thiết bị</p>
          <p>Chính sách bảo hành</p>
          <p>Hỗ trợ kỹ thuật</p>
        </div>
        <div>
          <h4>Liên hệ</h4>
          <p>Email: sẽ cập nhật</p>
          <p>Hotline: sẽ cập nhật</p>
          <p>Thời gian: 08:00 – 17:30</p>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Secure Home. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
