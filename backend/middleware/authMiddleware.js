const jwt = require("jsonwebtoken");

// Protect routes middleware
const protect = (req, res, next) => {
  try {
    let token;

    // Token from header
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
    }

    // If no token
    if (!token) {
      return res.status(401).json({ message: "Not authorized, no token" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user id to request
    req.user = decoded.id;

    next();

  } catch (error) {
    res.status(401).json({ message: "Token failed" });
  }
};

module.exports = protect;