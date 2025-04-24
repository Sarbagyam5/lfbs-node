import classroomService from "../../services/AcademicServices/classroomService.js";

const addClassroom = async (req, res) => {
  const data = req.body;
  if (!data.name) return res.status(400).send("Name of class room is required");
  if (!data.classTeacher)
    return res.status(400).send("Class teacher is required");
  try {
    const classRoom = await classroomService.addClassroom(data);
    res.status(classRoom.status).json(classRoom.data);
  } catch (error) {
    res
      .status(error.status || 400)
      .send(error.message || ` ${data.name}  cannot be added`);
  }
};

const getClassroomByAcademicYearId = async (req, res) => {
  const id = req.params.id;
  try {
    const classRooms = await classroomService.getClassroomByAcademicYearId(id);
    res.json(classRooms);
  } catch (error) {
    res
      .status(error.status || 400)
      .send(error.message || "Can't get the classroom");
  }
};

export { addClassroom, getClassroomByAcademicYearId };
