import express from "express";
import auth from "../middlewares/auth.js";
import {
  addAcademicYear,
  deleteAcademicYearById,
  getAcademicYears,
  updateAcademicYearById,
} from "../controller/AcademicControllers/academicYearController.js";
import {
  addSubject,
  deleteSubjectById,
  getAllSubject,
  updateSubjectById,
} from "../controller/AcademicControllers/subjectController.js";

const router = express.Router();

//academicYears
router.get("/academicYears", auth, getAcademicYears);
router.post("/academicYears", auth, addAcademicYear);
router.put("/academicYears/:id", auth, updateAcademicYearById);
router.delete("/academicYears/:id", auth, deleteAcademicYearById);
//Subjects
router.get("/subjects", auth, getAllSubject);
router.post("/subjects", auth, addSubject);
router.put("/subjects/:id", auth, updateSubjectById);
router.delete("/subjects/:id", auth, deleteSubjectById);

export default router;
