import mongoose from "mongoose";

const subjectAssignmentSchema = new mongoose.Schema({
  academicYear: { type: mongoose.Schema.Types.ObjectId, ref: "AcademicYear" },
  classroom: { type: mongoose.Schema.Types.ObjectId, ref: "Classroom" },
  subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
});

const SubjectAssignment = mongoose.model(
  "SubjectAssignment",
  subjectAssignmentSchema
);
export default SubjectAssignment;
