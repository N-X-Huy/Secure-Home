import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CustomerDashboard from "./pages/CustomerDashboard";
import StaffDashboard from "./pages/StaffDashboard";
import Unauthorized from "./pages/Unauthorized";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["customer"]} />}>
          <Route path="/account" element={<CustomerDashboard />} />
        </Route>

        <Route
          element={
            <ProtectedRoute
              allowedRoles={["employee", "technician", "admin"]}
            />
          }
        >
          <Route path="/staff" element={<StaffDashboard />} />
        </Route>

        <Route
          path="*"
          element={
            <main className="workspace-page">
              <div className="container empty-state">
                <h1>404 – Không tìm thấy trang</h1>
                <p>Đường dẫn bạn truy cập không tồn tại.</p>
              </div>
            </main>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
