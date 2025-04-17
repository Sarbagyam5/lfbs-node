import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: String,
  dob: Date,
  gender: String,
  phone: String,
  email: String,
  currentClassroom: { type: mongoose.Schema.Types.ObjectId, ref: "Classroom" },
  academicYear: { type: mongoose.Schema.Types.ObjectId, ref: "AcademicYear" },
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
