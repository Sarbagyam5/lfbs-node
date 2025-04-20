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

export { addTeacher };
