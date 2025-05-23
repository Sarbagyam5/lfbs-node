import { formatTeacher } from "../../helper/Academic/formatTeacher.js";
import teacherService from "../../services/AcademicServices/teacherService.js";

async function addTeacher(req, res) {
  const data = req.body;
  const file = req.file;
  if (!data.firstName) return res.status(400).send("Firstname is required");
  if (!data.lastName) return res.status(400).send("Lastname is required");
  if (!data.address) return res.status(400).send("Address is required");
  if (!data.appointDate)
    return res.status(400).send("Appoint date is required");
  if (!data.dateOfBirth)
    return res.status(400).send("Date of Birth is required");
  if (!data.designation)
    return res.status(400).send("Designation  is required");
  if (!data.sex) return res.status(400).send("Sex is required");
  if (!data.phoneNumber)
    return res.status(400).send("Phone number is required");
  if (!data.email) return res.status(400).send("Email is required");
  if (!data.citizenshipNumber)
    return res.status(400).send("Citizenship number is required");

  try {
    const response = await teacherService.addTeacher(data, file || "");
    res.json(formatTeacher(response));
  } catch (error) {
    res.status(error.status || 500).send(error.message || "Server Error");
  }
}

async function getAllTeacher(req, res) {
  try {
    const response = await teacherService.getAllTeacher();
    const formatedTeacher = response.map((teacher) => formatTeacher(teacher));
    res.json(formatedTeacher);
  } catch (error) {
    res
      .status(error.status || 500)
      .send(error.message || "Couldn't Get teachers");
  }
}

async function getTeacherById(req, res) {
  const id = req.params.id;

  if (!id) return res.status(400).send("Teacher id is required");
  try {
    const response = await teacherService.getTeacherById(id);
    res.json(formatTeacher(response));
  } catch (error) {
    res
      .status(error.status || 500)
      .send(error.message || "Couldn't Get teachers");
  }
}

async function deleteTeacherById(req, res) {
  const id = req.params.id;
  if (!id) return res.status(400).send("Id is required");
  try {
    await teacherService.deleteTeacherById(id);
    res.send("Teacher deleted sucessfull");
  } catch (error) {
    res.status(error.status || 500).send(error.message || "Couldn't Delete");
  }
}

async function updateTeacherById(req, res) {
  const id = req.params.id;
  const data = req.body;
  const file = req.file;
  if (!data.firstName) return res.status(400).send("Firstname is required");
  if (!data.lastName) return res.status(400).send("Lastname is required");
  if (!data.address) return res.status(400).send("Address is required");
  if (!data.appointDate)
    return res.status(400).send("Appoint date is required");
  if (!data.dateOfBirth)
    return res.status(400).send("Date of Birth is required");
  if (!data.designation)
    return res.status(400).send("Designation  is required");
  if (!data.sex) return res.status(400).send("Sex is required");
  if (!data.phoneNumber)
    return res.status(400).send("Phone number is required");
  if (!data.email) return res.status(400).send("Email is required");
  if (!data.citizenshipNumber)
    return res.status(400).send("Citizenship number is required");

  try {
    const response = await teacherService.updateTeacherById(
      data,
      file || "",
      id
    );
    res.json(formatTeacher(response));
  } catch (error) {
    res.status(error.status || 500).send(error.message || "Server Error");
  }
}

export {
  addTeacher,
  getAllTeacher,
  deleteTeacherById,
  getTeacherById,
  updateTeacherById,
};
