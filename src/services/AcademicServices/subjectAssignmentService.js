import SubjectAssignment from "../../models/AcademicModels/SubjectAssignment.js";

async function addsubjectAssignment(data) {
  const { academicYear, subject, classroom } = data;

  try {
    const existingAssignment = await SubjectAssignment.find({
      academicYear,
      subject,
      classroom,
    });

    if (existingAssignment.length > 0) {
      throw {
        status: 400,
        message: "Subject already assigned",
      };
    }

    const response = await SubjectAssignment.create(data);
    return response;
  } catch (error) {
    throw {
      status: error.status || 500,
      message: error.message || "Cant assign subject assigned in db",
    };
  }
}

async function getSubjectAssignments(academicYear, classroom) {
  try {
    return await SubjectAssignment.find({
      academicYear: academicYear,
      classroom: classroom,
    }).populate("subject");
  } catch (error) {
    throw {
      status: error.status || 500,
      message: error.message || "Cant get subject assigned in db",
    };
  }
}

export default { addsubjectAssignment, getSubjectAssignments };
