import mongoose from "mongoose";

const classroomSchema = new mongoose.Schema({
  name: String,
  academicYear: { type: mongoose.Schema.Types.ObjectId, ref: "AcademicYear" },
  classTeacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }],
  section: String,
});
const Classroom = mongoose.model("Classroom", classroomSchema);

export default Classroom;
