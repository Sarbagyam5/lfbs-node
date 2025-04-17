import AcademicYear from "../../models/AcademicModels/AcademicYear.js";

async function addAcademicYear(data) {
  const existingAcademicYear = await AcademicYear.findOne({ name: data.name });
  if (existingAcademicYear)
    return { status: 400, message: "Year already exist" };
  try {
    const newAcademicYear = await AcademicYear.create(data);
    return { status: 201, data: newAcademicYear };
  } catch (error) {
    return {
      status: 400,
      message: "Cant create academic year",
    };
  }
}

async function getAcademicYears() {
  try {
    return await AcademicYear.find();
  } catch (error) {
    return { status: 400, message: "Cant get academic year" };
  }
}

async function updateAcademicYearById(id, data) {
  const existingAcademicYear = await AcademicYear.findById(id);
  const modifiedDate = new Date();

  if (!existingAcademicYear)
    return { status: 404, message: "Academic year not found" };
  try {
    return await AcademicYear.findByIdAndUpdate(
      id,
      { $set: data, $push: { modifiedAt: modifiedDate } },
      { new: true }
    );
  } catch (error) {
    return { status: 400, message: "Cant update academic year" };
  }
}
export default { addAcademicYear, getAcademicYears, updateAcademicYearById };
