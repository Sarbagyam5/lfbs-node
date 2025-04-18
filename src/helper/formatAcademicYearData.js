import { adToBs } from "@sbmdkl/nepali-date-converter";

function formatAcademicYearData(data) {
  function adtoBsConverter(date) {
    if (!date) return null;
    const adDate = new Date(date);
    if (isNaN(adDate)) return null;

    const datePart = adDate.toISOString().split("T")[0];
    return adToBs(datePart); // returns object like { bsYear, bsMonth, bsDate }
  }

  function gmtToNepaliTimeConverter(date) {
    if (!date) return null;
    const adDate = new Date(date);
    if (isNaN(adDate)) return null;

    adDate.setMinutes(adDate.getMinutes() + 345); // Convert to NST
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
    createdAt: ` ${adtoBsConverter(
      data?.createdAt
    )}, ${gmtToNepaliTimeConverter(data?.createdAt)}`,
    modifiedAt: `${adtoBsConverter(
      data?.modifiedAt
    )}, ${gmtToNepaliTimeConverter(
      data?.modifiedAt[data?.modifiedAt.length - 1]
    )}`,
  };
}

export default formatAcademicYearData;
