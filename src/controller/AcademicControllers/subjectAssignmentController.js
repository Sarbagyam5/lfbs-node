import subjectAssignment from "../../services/AcademicServices/subjectAssignmentService.js";

const addSubjectAssignment = async (req, res) => {
  const data = req.body;
  const { academicYear, subject, classroom } = data;

  if (!academicYear) return res.status(400).send("Academic year is required");
  if (!subject) return res.status(400).send("Subject is required");
  if (!classroom) return res.status(400).send("Classroom is required");

  try {
    const response = await subjectAssignment.addsubjectAssignment(data);
    res.json(response);
  } catch (error) {
    res
      .status(error.status || 400)
      .send(error.message || "Can't assign subject to the class");
  }
};

const getSubjectAssignments = async (req, res) => {
  try {
    const response = await subjectAssignment.getSubjectAssignments();
    res.json(response);
  } catch (error) {
    res
      .status(error.status || 400)
      .send(error.message || "Can't get subject assignments");
  }
};

export { addSubjectAssignment, getSubjectAssignments };
