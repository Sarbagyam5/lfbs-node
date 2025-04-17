import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }],
  imageUrl: String,
});

const Teacher = mongoose.model("Teacher", teacherSchema);
export default Teacher;
