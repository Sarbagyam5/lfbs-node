import Teacher from "../../models/AcademicModels/Teacher.js";
import uploadFile from "../../utils/file.js";

async function addTeacher(data, image) {
  try {
    console.log(image);
    if (image.length > 0) {
      const [file] = uploadFile([image]);
      return await Teacher.create({ ...data, imageUrL: file.url });
    }
    return await Teacher.create(data);
  } catch (error) {
    throw error.message;
  }
}
export default { addTeacher };
