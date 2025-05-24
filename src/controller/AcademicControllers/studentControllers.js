import studentService from "../../services/AcademicServices/studentService.js";

async function addStudent(req, res) {
  const data = req.body;
  const file = req.file;
  if (!data.firstName) return res.status(400).send("Firstname is required");
  if (!data.lastName) return res.status(400).send("Lastname is required");
  if (!data.admissionDate)
    return res.status(400).send("Appoint date is required");
  if (!data.dob) return res.status(400).send("Date of Birth is required");
  if (!data.gender) return res.status(400).send("Gender is required");
  if (!data.classroom) return res.status(400).send("Classroom id is required");
  if (!data.academicYear)
    return res.status(400).send("Academic year is required");

  try {
    const response = await studentService.addStudent(data, file || "");
    res.json(response);
  } catch (error) {
    res.status(error.status || 500).send(error.message || "Server Error");
  }
}

async function getAllStudents(req, res) {
  try {
    const response = await studentService.getAllStudents();
    res.json(response);
  } catch (error) {
    res
      .status(error.status || 500)
      .send(error.message || "Couldn't Get Students");
  }
}
export { addStudent, getAllStudents };
