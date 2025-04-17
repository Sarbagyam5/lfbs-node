import mongoose from "mongoose";
const academicYearSchema = new mongoose.Schema({
  name: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  isCurrent: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now() },
  modifiedAt: { type: [Date], default: [] },
});

const AcademicYear = mongoose.model("AcademicYear", academicYearSchema);
export default AcademicYear;
