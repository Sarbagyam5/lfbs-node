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

const updateClassroomById = async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  if (data.name == "") return res.status(400).send("Classroom is empty");
  if (data.classTeacher == "")
    return res.status(400).send("Class teacher is empty");
  try {
    const classroom = await classroomService.updateClassroomById(data, id);
    res.json(classroom);
  } catch (error) {
    res
      .status(error.status || 400)
      .send(error.message || ` ${data.name}  cannot be updated`);
  }
};

const deleteClassroomById = async (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(400).send("Id is required");
  try {
    await classroomService.deleteClassroomById(id);
    res.json("Deleted Successfully");
  } catch (error) {
    res
      .status(error.status || 500)
      .send(error.message || "Unable to delete the given classroom");
  }
};
export {
  addClassroom,
  getClassroomByAcademicYearId,
  updateClassroomById,
  deleteClassroomById,
};
