const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

router.use(authenticate);

// Khu vực khách hàng
router.get("/customer", authorize("customer"), (req, res) => {
  res.json({
    message: "Bạn đang truy cập khu vực khách hàng.",
    user: req.user,
  });
});

// Khu vực nhân viên kinh doanh
router.get("/employee", authorize("employee"), (req, res) => {
  res.json({
    message: "Bạn đang truy cập khu vực nhân viên kinh doanh.",
    user: req.user,
  });
});

// Khu vực kỹ thuật viên
router.get("/technician", authorize("technician"), (req, res) => {
  res.json({
    message: "Bạn đang truy cập khu vực kỹ thuật viên.",
    user: req.user,
  });
});

// Khu vực quản trị viên
router.get("/admin", authorize("admin"), (req, res) => {
  res.json({
    message: "Bạn đang truy cập khu vực quản trị.",
    user: req.user,
  });
});

module.exports = router;
