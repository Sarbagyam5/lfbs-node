import Student from "../../models/AcademicModels/Student.js";

async function addStudent(data, image) {
  try {
    if (image) {
      const [file] = await uploadFile([image]);
      data = { ...data, imageUrl: file.url };
      return await Student.create(data);
    }
    return await Student.create(data);
  } catch (error) {
    throw {
      status: error.status || 500,
      message: error.message || "Cant add student in the db",
    };
  }
}

export default { addStudent };
