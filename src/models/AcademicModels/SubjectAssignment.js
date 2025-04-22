import mongoose from "mongoose";

const subjectAssignmentSchema = new mongoose.Schema({
  classroom: { type: mongoose.Schema.Types.ObjectId, ref: "Classroom" },
  subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
});

mongoose.model("SubjectAssignment", subjectAssignmentSchema);
export default subjectAssignmentSchema;
