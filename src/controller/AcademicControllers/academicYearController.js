import formatAcademicYearData from "../../helper/formatAcademicYearData.js";
import AcademicYearService from "../../services/AcademicServices/academicYearService.js";

const addAcademicYear = async (req, res) => {
  const data = req.body;
  if (!data.name) return res.status(400).send("Academic year is required");
  if (!data.startDate) return res.status(400).send("Starting date is required");
  if (!data.endDate) return res.status(400).send("Ending date is required");

  try {
    const academicYear = await AcademicYearService.addAcademicYear(data);
    res.status(academicYear.status).json(formatAcademicYearData(academicYear));
  } catch (error) {
    res
      .status(error.status || 400)
      .send(error.message || "Can't add the given academic year");
  }
};

const getAcademicYears = async (req, res) => {
  try {
    const academicYears = await AcademicYearService.getAcademicYears();
    const formatedAcademicYears = academicYears.map((academicYear) =>
      formatAcademicYearData(academicYear)
    );
    res.json(formatedAcademicYears);
  } catch (error) {
    res
      .status(error.status || 500)
      .send(
        error.message || "An error occurred while retrieving academic years."
      );
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
    res.json(formatAcademicYearData(academicYear));
  } catch (error) {
    res
      .status(error.status || 400)
      .send(error.message || "Can't update the academic years");
  }
};

const deleteAcademicYearById = async (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(400).send("Id is required");
  try {
    const academicYear = await AcademicYearService.deleteAcademicYearById(id);
    res.json("Deleted Successfully");
  } catch (error) {
    res
      .status(error.status || 400)
      .send(error.message || "Can't delete the academic years");
  }
};

export {
  addAcademicYear,
  getAcademicYears,
  updateAcademicYearById,
  deleteAcademicYearById,
};
