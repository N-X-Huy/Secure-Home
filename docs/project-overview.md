# SECURE HOME – Tổng quan dự án

## 1. Giới thiệu

Secure Home là website thương mại điện tử kinh doanh thiết bị an ninh thực tế như camera, khóa thông minh, thiết bị báo động và cảm biến. Website định hướng kết hợp bán hàng với tư vấn, khảo sát, lắp đặt và hỗ trợ sau bán hàng.

## 2. Nhóm người dùng

- Khách hàng (`customer`): xem sản phẩm, đặt hàng, yêu cầu tư vấn và theo dõi bảo hành.
- Nhân viên kinh doanh (`employee`): hỗ trợ khách hàng, tư vấn và xử lý đơn hàng.
- Kỹ thuật viên (`technician`): tiếp nhận lịch khảo sát, lắp đặt và hỗ trợ kỹ thuật.
- Quản trị viên (`admin`): quản lý và giám sát hoạt động hệ thống.

## 3. Kiến trúc công nghệ

- Front-end: React, Vite, React Router.
- Back-end: Node.js, Express.
- Cơ sở dữ liệu: MongoDB, Mongoose.
- Xác thực: bcryptjs và JSON Web Token (JWT).
- Quản lý mã nguồn: Git và GitHub.

## 4. Cấu trúc thư mục

- `client/`: giao diện React.
- `server/`: REST API, model, controller, middleware.
- `docs/`: tài liệu dự án, sơ đồ chức năng và kế hoạch Sprint.

## 5. Phạm vi Sprint 1

Thiết lập nền tảng, tài khoản, hồ sơ, xác thực JWT và phân quyền theo 4 vai trò. Các nghiệp vụ bán hàng, đơn hàng, tư vấn và bảo hành được triển khai ở các Sprint tiếp theo.
