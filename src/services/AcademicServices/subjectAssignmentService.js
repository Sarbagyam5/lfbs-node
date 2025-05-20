import SubjectAssignment from "../../models/AcademicModels/SubjectAssignment.js";

async function addSubjectAssignment(data) {
  const { academicYear, subject, classroom } = data;

  try {
    const existingAssignment = await SubjectAssignment.findOne({
      academicYear,
      subject,
      classroom,
    });

    if (existingAssignment) {
      throw {
        status: 400,
        message: `Subject ${subject} already assigned`,
      };
    }

    const response = await SubjectAssignment.create(data);
    return response;
  } catch (error) {
    throw {
      status: error.status || 500,
      message: error.message || `Cant assign  ${subject} assigned in db`,
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

async function deleteSubjectAssignement(
  subjectId,
  academicYearId,
  classroomId
) {
  const response = await SubjectAssignment.find({
    academicYear: academicYearId,
    classroom: classroomId,
    subject: subjectId,
  });
  if (!response)
    throw { status: 400, message: "can't find the assigned subject" };
  try {
    await SubjectAssignment.findOneAndDelete({
      academicYear: academicYearId,
      classroom: classroomId,
      subject: subjectId,
    });
    return { success: true, message: "Deleted successfully" };
  } catch (error) {
    throw {
      status: error.status || 500,
      message: error.message || "Deletion error",
    };
  }
}
async function updatesubjectAssignement(id, teacherId) {
  try {
    return await SubjectAssignment.findByIdAndUpdate(
      id,
      { teacher: teacherId },
      { new: true }
    )
      .populate("subject")
      .populate("teacher");
  } catch (error) {
    throw {
      status: error.status || 500,
      message: error.message || "Cant get assign teacher to the subject",
    };
  }
}
export default {
  addSubjectAssignment,
  getSubjectAssignments,
  deleteSubjectAssignement,
  updatesubjectAssignement,
};
