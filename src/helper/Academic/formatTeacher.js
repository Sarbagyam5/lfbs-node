function formatTeacher(data) {
  return {
    id: data?._id,
    firstName: data?.firstName,
    lastName: data?.lastName,
    address: data?.address,
    dateOfBirth: data?.dateOfBirth,
    sex: data?.sex,
    phoneNumber: data?.phoneNumber,
    email: data?.email,
    designation: data?.designation,
    appointDate: data?.appointDate,
    imageUrl: data?.imageUrl,
    citizenshipNumber: data?.citizenshipNumber,
    state: data?.state,
    municipalityVdc: data?.municipalityVdc,
    degreeProgram: data?.degreeProgram,
    institute: data?.institute,
    position: data?.position,
    company: data?.company,
    startDate: data?.startDate,
    endDate: data?.endDate,
  };
}

export { formatTeacher };
