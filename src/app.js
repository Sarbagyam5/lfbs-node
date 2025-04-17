import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import academicYearRoutes from "./routes/academicYearRoutes.js";
import connectDb from "./config/database.js";
import cors from "cors";
import connectCloudinary from "./config/cloudinar.js";
import multer from "multer";

const app = express();

dotenv.config();

connectDb();
connectCloudinary();

app.use(express.json());

const upload = multer({
  storage: multer.memoryStorage(),
});

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.json({
    version: "1.0.1",
    name: "LFBS",
    author: "Sarbagya Ghimire",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/user", upload.single("image"), userRoutes);
app.use("/api/academic", upload.single("image"), academicYearRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
