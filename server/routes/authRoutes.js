const express = require("express");
const router = express.Router();

const {
  register,
  login,
  logout,
  getProfile,
} = require("../controllers/authController");
const authenticate = require("../middleware/authMiddleware");

// Public routes
router.post("/register", register);
router.post("/login", login);

// Routes yêu cầu JWT hợp lệ
router.post("/logout", authenticate, logout);
router.get("/me", authenticate, getProfile);

module.exports = router;
