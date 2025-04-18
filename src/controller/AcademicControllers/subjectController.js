import formatSubject from "../../helper/Academic/formatSubject.js";
import subjectService from "../../services/AcademicServices/subjectService.js";

const addSubject = async (req, res) => {
  const data = Array.isArray(req.body) ? req.body : [req.body];
  const addedData = [];
  for (const item of data) {
    if (!item.name) return res.status(400).send("Academic year is required");
    if (!item.shortName)
      return res.status(400).send("Subject short name  is required");

    try {
      const subject = await subjectService.addSubject(item);
      addedData.push(formatSubject(subject.data));
    } catch (error) {
      res
        .status(error.status || 500)
        .send(error.message || "Can't create given subject");
    }
  }
  res.status(201).json(addedData);
};

const getAllSubject = async (req, res) => {
  try {
    const allSubject = await subjectService.getAllSubjects();
    const formatedSubject = allSubject.map((subject) => formatSubject(subject));
    res.json(formatedSubject);
  } catch (error) {
    res
      .status(error.status || 500)
      .send(error.message || "An error occurred while retrieving subjects.");
  }
};

const updateSubjectById = async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  if (!id) return res.status(400).send("Id is required");
  if (!data) return res.status(400).send("Required data is missing");
  try {
    const subject = await subjectService.updateSubjectsById(id, data);
    res.json(formatSubject(subject));
  } catch (error) {
    res
      .status(error.status || 400)
      .send(error.message || "Can't update the subject");
  }
};

const deleteSubjectById = async (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(400).send("Id is required");
  try {
    await subjectService.deleteSubjectById(id);
    res.json("Deleted Successfully");
  } catch (error) {
    res
      .status(error.status || 500)
      .send(error.message || "Unable to delete the given subject");
  }
};

export { addSubject, getAllSubject, updateSubjectById, deleteSubjectById };
