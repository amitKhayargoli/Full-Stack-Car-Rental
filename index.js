import express from "express";
import { initializeDatabase } from "./postgres/db.js";
import router from "./view/routes.js";
import bodyParser from "body-parser";
import { authenticateToken } from "./middleware/token-middleware.js";
import { authRouter } from "./view/auth/authRoute.js";

const app = express();
app.use(express.json());
app.use(router);

app.use(bodyParser.json());
app.use(authenticateToken);
app.use("/api/users", router);
app.use("/api/auth", authRouter);

const PORT = 8000;

app.listen(PORT, async () => {
  console.log(`Server is running at PORT ${PORT}`);
  await initializeDatabase(); 
});
