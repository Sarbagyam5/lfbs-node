import AcademicYear from "../../models/AcademicModels/AcademicYear.js";
import Subject from "../../models/AcademicModels/Subject.js";

async function addSubject(data) {
  const existingSubject = await Subject.findOne({ name: data.name });
  if (existingSubject) throw { status: 400, message: "Subject already exist" };
  try {
    const newSubject = await Subject.create(data);
    return { status: 201, data: newSubject };
  } catch (error) {
    throw {
      status: 400,
      message: "Cant create new subject year",
    };
  }
}

async function getAllSubjects() {
  try {
    return await Subject.find();
  } catch (error) {
    throw { status: 400, message: "Cant get subjects year" };
  }
}

async function updateSubjectsById(id, data) {
  const existingSubject = await Subject.findById(id);

  if (!existingSubject) throw { status: 404, message: "Subject not found" };
  try {
    return await Subject.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    throw { status: 400, message: "Cant update subject" };
  }
}

async function deleteSubjectById(id) {
  const existingSubject = await Subject.findById(id);

  if (!existingSubject) throw { status: 404, message: "Subject doesn't exist" };
  try {
    return await Subject.findByIdAndDelete(id);
  } catch (error) {
    throw { status: 400, message: "Cant delete subject" };
  }
}
export default {
  addSubject,
  getAllSubjects,
  updateSubjectsById,
  deleteSubjectById,
};
