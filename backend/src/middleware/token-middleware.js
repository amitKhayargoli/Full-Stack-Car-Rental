const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

// Middleware to verify JWT token
function authenticateToken(req, res, next) {
  // Skip token verification for the login route
  if (req.path === "/api/auth/login") {
    return next();
  }

  if (req.path === "/api/user") {
    return next();
  }

  if (req.path === "/api/userProfile") {
    return next();
  }

  const authorizationHeader = req.header("Authorization");
  console.log("Authorization Header:", authorizationHeader);

  const token = authorizationHeader?.split(" ")[1];
  console.log("Token:", token);

  if (!token) {
    return res
      .status(401)
      .send({ message: "Access denied. No token provided." });
  }

  jwt.verify(token, process.env.secretkey, (err, decoded) => {
    if (err) {
      return res.status(403).send("Invalid or expired token.");
    }
    req.user = decoded; // Attach decoded payload to request object
    next(); // Proceed to the next middleware or route handler
  });
}

module.exports = { authenticateToken };
