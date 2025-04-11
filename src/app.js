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
  res.send("hello sathi");
});

app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
