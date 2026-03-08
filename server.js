import express from "express";
import dotenv from "dotenv";
import coursesRoutes from "./routes/courses.js";
import validateEnrollment from "./middleware/validateEnrollment.js";
import logger from "./middleware/logger.js";
dotenv.config();
const app = express();
app.use(express.json());

app.use(logger);
app.use("/", coursesRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running");
});
