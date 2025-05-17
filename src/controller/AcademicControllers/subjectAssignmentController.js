import subjectAssignment from "../../services/AcademicServices/subjectAssignmentService.js";

const addSubjectAssignment = async (req, res) => {
  const data = req.body;

  const results = [];

  for (const element of data) {
    const { academicYear, subject, classroom } = element;

    if (!academicYear || !subject || !classroom) {
      return res
        .status(400)
        .send("Academic year, subject, and classroom are required");
    }

    try {
      const response = await subjectAssignment.addSubjectAssignment(element);
      results.push(response);
    } catch (error) {
      return res
        .status(error.status || 400)
        .send(error.message || `Can't assign ${subject} to the class`);
    }
  }

  res.json(results);
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

    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    res.status(error.status || 500).json({
      success: false,
      message: error.message || "Can't get subject assignments",
    });
  }
};

export { addSubjectAssignment, getSubjectAssignments };
