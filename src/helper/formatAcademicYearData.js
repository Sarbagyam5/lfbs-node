import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { adToBs } = require("@sbmdkl/nepali-date-converter");

function formatAcademicYearData(data) {
  console.log(data);

  function adtoBsConverter(date) {
    if (!date) return "-";
    const adDate = new Date(date);
    if (isNaN(adDate)) return "-";

    const datePart = adDate.toISOString().split("T")[0];
    return adToBs(datePart);
  }

  function gmtToNepaliTimeConverter(date) {
    if (!date) return "-";
    const adDate = new Date(date);
    if (isNaN(adDate)) return "-";

    adDate.setMinutes(adDate.getMinutes() + 345);
    const hours = adDate.getHours().toString().padStart(2, "0");
    const minutes = adDate.getMinutes().toString().padStart(2, "0");
    const seconds = adDate.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  return {
    id: data?.id,
    name: data?.name,
    startDate: adtoBsConverter(data?.startDate),
    endDate: adtoBsConverter(data?.endDate),
    isCurrent: data?.isCurrent ?? false,
    createdAt: `${adtoBsConverter(data?.createdAt)}, ${gmtToNepaliTimeConverter(
      data?.createdAt
    )}`,
    modifiedAt: `${adtoBsConverter(
      data?.modifiedAt
    )}, ${gmtToNepaliTimeConverter(
      data?.modifiedAt?.[data?.modifiedAt?.length - 1]
    )}`,
  };
}

export default formatAcademicYearData;
