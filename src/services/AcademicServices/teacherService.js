import Teacher from "../../models/AcademicModels/Teacher.js";
import uploadFile from "../../utils/file.js";

async function addTeacher(data, image) {
  try {
    if (image) {
      const [file] = await uploadFile([image]);
      data = { ...data, imageUrl: file.url };
      return await Teacher.create(data);
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
    throw { status: 500, message: "Server doesnt respond the teachers" };
  }
}

async function getTeacherById(id) {
  try {
    const teacher = await Teacher.findById(id);
    if (!teacher)
      throw { status: 400, message: "No Teacher with the given Id found" };
    return teacher;
  } catch (error) {
    throw {
      status: error.status || 500,
      message: error.message || "Server doesnt respond the teacher",
    };
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

async function updateTeacherById(data, image, id) {
  try {
    if (image) {
      const [file] = await uploadFile([image]);
      data = { ...data, imageUrl: file.url };
      const response = await Teacher.findByIdAndUpdate(id, data);
      if (!response)
        throw { status: 400, message: "cant find the staff off the given id" };
      return response;
    }
    const response = await Teacher.findByIdAndUpdate(id, data);
    return response;
  } catch (error) {
    throw {
      status: error.status || 500,
      message: error.message || "Server error",
    };
  }
}
export default {
  addTeacher,
  getAllTeacher,
  deleteTeacherById,
  getTeacherById,
  updateTeacherById,
};
