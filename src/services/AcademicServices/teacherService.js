import Teacher from "../../models/AcademicModels/Teacher.js";
import uploadFile from "../../utils/file.js";

async function addTeacher(data, image) {
  try {
    if (image.length > 0) {
      const [file] = uploadFile([image]);
      return await Teacher.create({ ...data, imageUrL: file.url });
    }
    return await Teacher.create(data);
  } catch (error) {
    throw error.message;
  }
}

async function getAllTeacher() {
  try {
    return await Teacher.find();
  } catch (error) {
    throw { status: 500, message: "Server doesnt respond the teacher" };
  }
}

async function deleteTeacherById(id) {
  const isUser = await Teacher.findById(id);
  if (!isUser)
    throw { status: 400, message: "No Teacher with the given Id found" };
  try {
    return await Teacher.findByIdAndDelete(id);
  } catch (error) {
    throw { status: 500, message: "Server error" };
  }
}
export default { addTeacher, getAllTeacher, deleteTeacherById };
