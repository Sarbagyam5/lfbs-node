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
    const classrooms = await Classroom.find({ academicYear: id });
    return classrooms;
  } catch (error) {
    throw {
      status: error.status || 500,
      message: error.message || "Cant get the classroom from db",
    };
  }
}
export default { addClassroom, getClassroomByAcademicYearId };
