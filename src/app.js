import express from "express";
import dotenv, { parse } from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import connectDb from "./config/database.js";
import cors from "cors";

const app = express();

dotenv.config();
connectDb();
app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({
    version: "1.0.2",
    name: "LFBS",
    author: "Sarbagya Ghimire",
  });
});

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
