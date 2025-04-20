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
export default { addTeacher, getAllTeacher };
