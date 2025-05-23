import subjectAssignment from "../../services/AcademicServices/subjectAssignmentService.js";

const addSubjectAssignment = async (req, res) => {
  const data = req.body;
  const { academicYear, subject, classroom } = data;

  if (!academicYear) return res.status(400).send("Academic year is required");
  if (!subject) return res.status(400).send("Subject is required");
  if (!classroom) return res.status(400).send("Classroom is required");

  try {
    const response = await subjectAssignment.addSubjectAssignment(data);
    res.json(response);
  } catch (error) {
    res
      .status(error.status || 400)
      .send(error.message || `Can't assign ${subject} to the ${classroom}`);
  }
};

const getSubjectAssignments = async (req, res) => {
  const academicYearId = req.query.academicYearId;
  const classroomId = req.query.classRoomId;

  if (!academicYearId || !classroomId) {
    return res.status(400).json({
      message: "Academic year ID and classroom ID are required.",
    });
  }

  try {
    const response = await subjectAssignment.getSubjectAssignments(
      academicYearId,
      classroomId
    );

    res.status(200).json(response);
  } catch (error) {
    res.status(error.status || 500).json({
      success: false,
      message: error.message || "Can't get subject assignments",
    });
  }
};

async function deleteSubjectAssignement(req, res) {
  const { subjectId, academicYearId, classroomId } = req.body;
  try {
    await subjectAssignment.deleteSubjectAssignement(
      subjectId,
      academicYearId,
      classroomId
    );
    res.json("Deleted Succefully");
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ message: error.message || "Cant delete the subject" });
  }
}

async function updatesubjectAssignement(req, res) {
  const assignSubjectId = req.params.id;
  const { teacherId } = req.body;

  if (!assignSubjectId || !teacherId)
    return res
      .status(400)
      .send("Teacher ID or Subject Assignment ID is missing");
  try {
    const response = await subjectAssignment.updatesubjectAssignement(
      assignSubjectId,
      teacherId
    );
    res.json(response);
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ message: error.message || "Cant add teacher for the subject" });
  }
}

export {
  addSubjectAssignment,
  getSubjectAssignments,
  deleteSubjectAssignement,
  updatesubjectAssignement,
};
