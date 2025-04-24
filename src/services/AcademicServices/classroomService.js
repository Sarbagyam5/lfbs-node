import Classroom from "../../models/AcademicModels/Classroom.js";

async function addClassroom(data) {
  try {
    const newClassroom = await Classroom.create(data);
    return { status: 201, data: newClassroom };
  } catch (error) {
    throw {
      status: error.status || 400,
      message: error.message || "Cant create the classroom in db",
    };
  }
}

async function getClassroomByAcademicYearId(id) {
  try {
    const classrooms = await Classroom.find({ academicYear: id }).populate(
      "classTeacher"
    );
    return classrooms;
  } catch (error) {
    throw {
      status: error.status || 500,
      message: error.message || "Cant get the classroom from db",
    };
  }
}

async function updateClassroomById(data, id) {
  try {
    return await Classroom.findByIdAndUpdate(id, data);
  } catch (error) {
    throw {
      status: error.status || 400,
      message: error.message || "Cant update the classroom in db",
    };
  }
}

async function deleteClassroomById(id) {
  const existingClassroom = await Classroom.findById(id);

  if (!existingClassroom)
    throw { status: 404, message: "Classroom doesn't exist" };
  try {
    return await Classroom.findByIdAndDelete(id);
  } catch (error) {
    throw { status: 500, message: "Cant delete classroom in db" };
  }
}
export default {
  addClassroom,
  getClassroomByAcademicYearId,
  updateClassroomById,
  deleteClassroomById,
};
