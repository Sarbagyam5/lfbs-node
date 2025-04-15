import express from "express";
import { getUserById, updateUserInfo } from "../controller/userController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/update", auth, updateUserInfo);

router.get("/:id", auth, getUserById);

export default router;
