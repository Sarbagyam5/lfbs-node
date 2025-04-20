import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  appointDate: { type: Date, required: true },
  citizenshipNumber: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  designation: { type: String, required: true },
  sex: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  municipalityVdc: String,
  state: String,
  company: String,
  degreeProgram: String,
  description: String,
  startDate: Date,
  endDate: Date,
  institute: String,
  position: String,
  skills: String,
  imageUrl: String,
});

const Teacher = mongoose.model("Teacher", teacherSchema);
export default Teacher;
