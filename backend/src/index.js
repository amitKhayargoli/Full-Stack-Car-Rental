const express = require("express");
const cors = require("cors");
const app = express();
const { connection, sequelize } = require("./database/db");

const userRouter = require("./routes/userRoute");
const authRouter = require("./routes/authRoute");
const carRouter = require("./routes/carRoute");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { authenticateToken } = require("./middleware/token-middleware");
const router = require("./routes/uploadRoutes");

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

app.use(bodyParser.json());
// app.use(authenticateToken);
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/Car", carRouter);

app.use("/api/file", router);
createUploadsFolder();

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully");

    // await sequelize.sync();
    // console.log("All tables synced");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error);
  }
})();
