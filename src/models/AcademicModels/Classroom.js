import mongoose from "mongoose";

const classroomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  academicYear: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "AcademicYear",
  },
  classTeacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }],
  section: String,
});
const Classroom = mongoose.model("Classroom", classroomSchema);

export default Classroom;
