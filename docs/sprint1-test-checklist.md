# Checklist kiểm thử Sprint 1

## A. Chạy ứng dụng

1. Đảm bảo MongoDB service đang chạy.
2. Trong `server/`, tạo `.env` từ `.env.example`, nhập `JWT_SECRET` riêng.
3. Chạy Backend: `npm install` rồi `npm run dev`.
4. Chạy Frontend ở terminal khác: `npm install` rồi `npm run dev`.

## B. Kiểm tra giao diện

- [ ] Trang chủ hiển thị Header, Navbar, nội dung và Footer.
- [ ] Trang đăng ký hiển thị lỗi khi xác nhận mật khẩu không khớp.
- [ ] Đăng ký thành công tạo tài khoản có role `customer`.
- [ ] Đăng nhập thành công chuyển đến `/account`.
- [ ] Trang `/profile` hiển thị đúng họ tên, email và vai trò.
- [ ] Nhấn F5 vẫn giữ phiên nếu Token hợp lệ.
- [ ] Đăng xuất quay về trang chủ và Header trở về trạng thái khách.

## C. Kiểm tra API bằng Postman

Đặt biến `baseUrl` là `http://localhost:5000`.

### Đăng ký

`POST {{baseUrl}}/api/auth/register`

```json
{
  "name": "Test Customer",
  "email": "customer_test@example.com",
  "password": "123456"
}
```

Kỳ vọng: HTTP 201; user có role `customer`; response không chứa password.

### Đăng nhập

`POST {{baseUrl}}/api/auth/login`

```json
{
  "email": "customer_test@example.com",
  "password": "123456"
}
```

Kỳ vọng: HTTP 200; nhận được `token` và thông tin user.

### Lấy hồ sơ

`GET {{baseUrl}}/api/auth/me`

Header:
`Authorization: Bearer <token>`

Kỳ vọng: HTTP 200 và trả về hồ sơ của chính tài khoản đó.

### Kiểm tra phân quyền

Dùng cùng Token khách hàng gọi:
`GET {{baseUrl}}/api/dashboard/customer`

Kỳ vọng: HTTP 200.

Dùng Token khách hàng gọi:
`GET {{baseUrl}}/api/dashboard/employee`

Kỳ vọng: HTTP 403.

Gọi API bảo vệ mà không có Authorization Header:
Kỳ vọng: HTTP 401.

### Đăng xuất và xác minh Token cũ

`POST {{baseUrl}}/api/auth/logout`

Header:
`Authorization: Bearer <token>`

Kỳ vọng: HTTP 200.

Sau đó dùng lại Token cũ gọi `GET /api/auth/me`.
Kỳ vọng: HTTP 401 vì tokenVersion của tài khoản đã tăng.

## D. Kiểm tra đủ 4 vai trò

Đăng ký tài khoản kiểm thử riêng cho từng người dùng. Trong MongoDB Compass, chỉ dùng dữ liệu kiểm thử để thay trường `role` lần lượt thành:

- `customer`
- `employee`
- `technician`
- `admin`

Đăng xuất rồi đăng nhập lại sau mỗi lần đổi role để nhận JWT mới. Kiểm tra:

- customer vào `/account`.
- employee vào `/staff` và gọi `/api/dashboard/employee`.
- technician vào `/staff` và gọi `/api/dashboard/technician`.
- admin vào `/staff` và gọi `/api/dashboard/admin`.

Không đổi role tài khoản thật đang sử dụng. Không cho phép người dùng tự chọn role trên form đăng ký.

## E. Ghi nhận lỗi

Nếu có lỗi, chỉ cần gửi:

1. Nội dung lỗi đầu tiên trên terminal Backend hoặc trình duyệt.
2. Endpoint đang kiểm tra và HTTP status.
3. Không gửi `.env`, JWT_SECRET, mật khẩu hoặc Token thật.
