import express from "express";
import {
  getAuthUser,
  login,
  logout,
  register,
} from "../controller/authController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", auth, register);
router.get("/authUser", auth, getAuthUser);
router.post("/logout", auth, logout);

export default router;
