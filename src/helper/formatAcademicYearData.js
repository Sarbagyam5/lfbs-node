function formatAcademicYearData(data) {
  const createdDate = new Date(data?.createdAt);
  const createdNepaliDateTime = createdDate.toLocaleString("en-US", {
    timeZone: "Asia/Kathmandu",
  });

  const startDate = new Date(data?.startDate);
  const startNepaliDate = startDate.toDateString("en-US", {
    timeZone: "Asia/Kathmandu",
  });

  const endDate = new Date(data?.endDate);
  const endNepaliDate = endDate.toDateString("en-US", {
    timeZone: "Asia/Kathmandu",
  });

  const modifiedAt = data?.modifiedAt;
  let modifiedNepaliDateTime = null;
  if (modifiedAt && modifiedAt.length > 0) {
    const lastModifiedAt = modifiedAt[modifiedAt.length - 1];
    const modifiedDate = new Date(lastModifiedAt);
    modifiedNepaliDateTime = modifiedDate.toLocaleString("en-US", {
      timeZone: "Asia/Kathmandu",
    });
  }
  return {
    id: data.id,
    name: data.name,
    startDate: startNepaliDate,
    endDate: endNepaliDate,
    isCurrent: data.isCurrent,
    createdAt: createdNepaliDateTime,
    modifiedAt: modifiedNepaliDateTime,
  };
}

export default formatAcademicYearData;
