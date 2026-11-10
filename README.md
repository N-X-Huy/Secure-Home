# SECURE HOME

Website thương mại điện tử chuyên kinh doanh thiết bị an ninh, kết hợp tư vấn giải pháp, khảo sát, lắp đặt và hỗ trợ sau bán hàng.

## Công nghệ

- Front-end: React + Vite + React Router
- Back-end: Node.js + Express
- Database: MongoDB + Mongoose
- Authentication: bcryptjs + JWT
- Version control: Git + GitHub

## Cấu trúc

```text
Secure-Home/
├── client/
├── server/
└── docs/
```

## Chạy dự án trên Windows

### 1. Chuẩn bị môi trường

Cài Node.js và MongoDB. Mở MongoDB service trước khi chạy Backend.

### 2. Cấu hình Backend

Mở PowerShell:

```powershell
cd D:\Secure-Home\server
Copy-Item .env.example .env
```

Mở `server/.env`, cấu hình `MONGODB_URI` và thay `JWT_SECRET` bằng chuỗi ngẫu nhiên dài, riêng tư (ít nhất 32 ký tự). Không commit file `.env` lên GitHub.

Cài đặt và chạy:

```powershell
npm install
npm run dev
```

Backend mặc định chạy tại `http://localhost:5000`.

### 3. Chạy Frontend

Mở cửa sổ PowerShell khác:

```powershell
cd D:\Secure-Home\client
npm install
npm run dev
```

Mở địa chỉ Vite hiển thị trên terminal, thường là `http://localhost:5173`.

## API Sprint 1

| Method | Endpoint                  | Quyền      |
| ------ | ------------------------- | ---------- | --- | --- | --------------------------- | ---------- | --- | --- | ---------------------- | ----- |
| POST   | `/api/auth/register`      | Công khai  |
| POST   | `/api/auth/login`         | Công khai  |
| POST   | `/api/auth/logout`        | JWT hợp lệ |
| GET    | `/api/auth/me`            | JWT hợp lệ |
| GET    | `/api/dashboard/customer` | customer   |
| GET    | `/api/dashboard/employee` | employee   | \n  | GET | `/api/dashboard/technician` | technician | \n  | GET | `/api/dashboard/admin` | admin |
| GET    | `/api/dashboard/admin`    | admin      |

Các API được bảo vệ nhận Token qua HTTP Header:

```http
Authorization: Bearer <access_token>
```

## Bốn vai trò

- `customer`: khách hàng.
- `employee`: nhân viên kinh doanh.
- `technician`: kỹ thuật viên.
- `admin`: quản trị viên.

Đăng ký công khai luôn tạo vai trò `customer`. Không cho phép client tự gửi `role` để tự nâng quyền. Tài khoản nhân viên/kỹ thuật viên/admin cần được cấp vai trò bởi quy trình quản trị đáng tin cậy.

## Tài liệu

- `docs/project-overview.md`
- `docs/functional-diagram.md`
- `docs/sprint-plan.md`

## Lưu ý bảo mật

- Không chia sẻ hoặc commit `.env`.
- Không đưa mật khẩu hoặc JWT secret vào mã nguồn.
- JWT hiện có thời hạn 1 ngày; logout tăng `tokenVersion` trong tài khoản để vô hiệu hóa các token cũ.
- localStorage tiện cho bản học tập/demo nhưng có rủi ro khi trang bị XSS. Khi triển khai thực tế nên đánh giá chuyển sang cookie `HttpOnly`, `Secure`, `SameSite`, bật HTTPS, rate limiting, logging và các biện pháp bảo mật bổ sung.
