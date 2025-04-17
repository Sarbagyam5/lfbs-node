import express from "express";
import {
  addAcademicYear,
  getAcademicYears,
  updateAcademicYearById,
} from "../controller/AcademicControllers/academicYearController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

//academicYears
router.get("/academicYears", auth, getAcademicYears);
router.post("/academicYears", auth, addAcademicYear);
router.put("/academicYears/:id", auth, updateAcademicYearById);

export default router;
