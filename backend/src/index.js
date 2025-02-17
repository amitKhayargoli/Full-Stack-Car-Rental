const express = require("express");
const cors = require("cors");
const app = express();
const { connection, sequelize } = require("./database/db");
const userProfileRouter = require("./routes/userProfileRoute");
const userRouter = require("./routes/userRoute");
const authRouter = require("./routes/authRoute");
const carRouter = require("./routes/carRoute");
const customerReviewRouter = require("./routes/customerReviewRoute");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { authenticateToken } = require("./middleware/token-middleware");
const router = require("./routes/uploadRoutes");
const garageRoutes = require("./routes/garageRoute");
const carRentalRoutes = require("./routes/carRentalRoutes");
const { createUploadsFolder } = require("./security/helper");

dotenv.config();
const PORT = process.env.PORT;
// app.use(cors());
const corsOptions = {
  origin: "http://localhost:5173", // Allow frontend at port 5173
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.use("/uploads", express.static("uploads")); // Serve static files from the "uploads" directory
createUploadsFolder();
app.use(bodyParser.json());
// app.use(authenticateToken);
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/garage", garageRoutes);
app.use("/Car", carRouter);
app.use("/api/userProfile", userProfileRouter);
app.use("/api/customerReview", customerReviewRouter);
app.use("/api/file", router);

app.use("/api/rental", carRentalRoutes);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error);
  }
})();
