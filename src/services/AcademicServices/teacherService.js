import Teacher from "../../models/AcademicModels/Teacher.js";
import uploadFile from "../../utils/file.js";

async function addTeacher(data, image) {
  try {
    const [file] = uploadFile([image]);
    return await Teacher.create({ ...data, imageUrL: file.url });
  } catch (error) {
    throw error.message;
  }
}
export default { addTeacher };
