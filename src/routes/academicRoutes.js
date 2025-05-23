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
import {
  addTeacher,
  deleteTeacherById,
  getAllTeacher,
  getTeacherById,
  updateTeacherById,
} from "../controller/AcademicControllers/teacherController.js";
import {
  addClassroom,
  deleteClassroomById,
  getClassroomByAcademicYearId,
  updateClassroomById,
} from "../controller/AcademicControllers/classroomController.js";
import {
  addSubjectAssignment,
  deleteSubjectAssignement,
  getSubjectAssignments,
  updatesubjectAssignement,
} from "../controller/AcademicControllers/subjectAssignmentController.js";
import {
  addStudent,
  getAllStudents,
} from "../controller/AcademicControllers/studentControllers.js";

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
//Teacher
router.post("/teachers", auth, addTeacher);
router.get("/teachers", auth, getAllTeacher);
router.get("/teachers/:id", auth, getTeacherById);
router.put("/teachers/:id", auth, updateTeacherById);
router.delete("/teachers/:id", auth, deleteTeacherById);

//Students
router.post("/students", auth, addStudent);
router.get("/students", auth, getAllStudents);

//Classroom
router.post("/classrooms", auth, addClassroom);
router.get("/classrooms/academicYear/:id", auth, getClassroomByAcademicYearId);
router.put("/classrooms/:id", auth, updateClassroomById);
router.delete("/classrooms/:id", auth, deleteClassroomById);

//subject-ClassroomAssignment
router.post("/classrooms/assignSubject", auth, addSubjectAssignment);
router.get("/classrooms/assignSubject", auth, getSubjectAssignments);
router.delete(
  "/classrooms/assignSubject/delete",
  auth,
  deleteSubjectAssignement
);

//Subject-TeacherAssignment
router.put("/teachers/assignSubject/:id", auth, updatesubjectAssignement);
export default router;
