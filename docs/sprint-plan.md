# Kế hoạch Sprint – Secure Home

## Sprint 1: Xây dựng nền tảng, tài khoản và phân quyền

### Tuần 1

| Nhóm            | Công việc                                                                                                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Công việc chung | Tạo repository GitHub; thiết lập cấu trúc thư mục client, server, docs; cài đặt React, Node.js, Express; kết nối MongoDB; tạo cấu trúc giao diện chung; xây dựng middleware xác thực và phân quyền. |
| Front-end       | Xây dựng Header, Footer, Navbar; trang đăng ký, đăng nhập; trang hồ sơ cá nhân; giao diện cơ bản dành cho khách hàng và nhân viên.                                                                  |
| Back-end        | Xây dựng User Model; API đăng ký, đăng nhập, đăng xuất; mã hóa mật khẩu; xác thực người dùng; phân quyền 4 vai trò: khách hàng, nhân viên kinh doanh, kỹ thuật viên, admin.                         |

### Tiêu chí hoàn thành

- Đăng ký tài khoản mới, mật khẩu được băm bằng bcrypt.
- Người dùng đăng nhập và nhận JWT Access Token.
- API cần bảo vệ từ chối request thiếu Token, Token sai hoặc hết hạn.
- Đăng xuất làm Token cũ mất hiệu lực.
- API kiểm tra quyền theo 4 vai trò.
- Trang hồ sơ yêu cầu đăng nhập; giao diện khách hàng và nhân viên yêu cầu đúng vai trò.
- Làm mới trang vẫn khôi phục được phiên hợp lệ.
- README và tài liệu trong `docs/` được cập nhật.

## Sprint 2: Sản phẩm, danh mục, thương hiệu và tồn kho

## Sprint 3: Giỏ hàng, đơn hàng và thanh toán

## Sprint 4: Tư vấn giải pháp, báo giá và đặt lịch

## Sprint 5: Bảo hành, hỗ trợ và đánh giá

## Sprint 6: Nghiệp vụ nhân viên, kỹ thuật viên và thống kê

## Sprint 7: Tích hợp, kiểm thử, bảo mật và hoàn thiện
