import express from "express";
import { getAuthUser, login, register } from "../controller/authController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", auth, register);
router.get("/authUser", auth, getAuthUser);

export default router;
