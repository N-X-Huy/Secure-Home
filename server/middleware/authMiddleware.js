const jwt = require("jsonwebtoken");
const User = require("../models/user");

// Xác minh JWT và kiểm tra phiên đăng nhập còn hiệu lực.
const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Bạn cần đăng nhập để thực hiện thao tác này.",
      });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token không hợp lệ." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("+tokenVersion");

    if (!user || user.tokenVersion !== (decoded.tokenVersion ?? 0)) {
      return res.status(401).json({
        message: "Phiên đăng nhập không còn hợp lệ. Vui lòng đăng nhập lại.",
      });
    }

    req.user = {
      id: user._id.toString(),
      role: user.role,
      name: user.name,
      email: user.email,
    };

    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.",
      });
    }

    return res.status(401).json({
      message: "Token không hợp lệ hoặc đã hết hạn.",
    });
  }
};

module.exports = authenticate;
