import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  admissionDate: { type: Date, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  phone: String,
  email: String,
  classroom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Classroom",
    required: true,
  },
  academicYear: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AcademicYear",
    required: true,
  },
  guardianName: String,
  guardianPhone: String,
  address: {
    address: String,
    state: String,
    municipalityVdc: String,
  },
  remarks: String,
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
