function formatTeacher(data) {
  return {
    id: data._id,
    firstName: data.firstName,
    lastName: data.lastName,
    address: data.address,
    dateOfBirth: data.dateOfBirth,
    sex: data.sex,
    phoneNumber: data.phoneNumber,
    email: data.email,
    designation: data.designation,
    appointDate: data.appointDate,
  };
}

export { formatTeacher };
