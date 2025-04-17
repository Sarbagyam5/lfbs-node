import AcademicYearService from "../../services/AcademicServices/AcademicYearService.js";
const addAcademicYear = async (req, res) => {
  const data = req.body;
  if (!data.name) return res.status(400).send("Academic year is required");
  if (!data.startDate) return res.status(400).send("Starting date is required");
  if (!data.endDate) return res.status(400).send("Ending date is required");

  try {
    const academicYear = await AcademicYearService.addAcademicYear(data);
    res.status(academicYear.status).json(academicYear.data);
  } catch (error) {
    res
      .status(error.status || 400)
      .send(error.message || "Can't add the given academic year");
  }
};

const getAcademicYears = async (req, res) => {
  try {
    const academicYears = await AcademicYearService.getAcademicYears();
    res.json(academicYears);
  } catch (error) {
    res
      .status(error.status || 400)
      .send(error.message || "Can't get the academic years");
  }
};

const updateAcademicYearById = async (req, res) => {
  const { name, startDate, endDate, isCurrent } = req.body;
  const id = req.params.id;
  if (!id) return res.status(400).send("Id is required");
  if (!name && !startDate && !endDate && !isCurrent)
    return res.status(400).send("Required data is missing");
  try {
    const academicYear = await AcademicYearService.updateAcademicYearById(id, {
      name,
      startDate,
      endDate,
      isCurrent,
    });
    res.json(academicYear);
  } catch (error) {
    res
      .status(error.status || 400)
      .send(error.message || "Can't update the academic years");
  }
};

export { addAcademicYear, getAcademicYears, updateAcademicYearById };
