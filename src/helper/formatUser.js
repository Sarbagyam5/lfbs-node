function formatUser(data) {
  const modifiedDate = new Date(data?.modifiedAt);
  const modifiedNepaliDateTime = modifiedDate.toLocaleString("en-US", {
    timeZone: "Asia/Kathmandu",
  });

  const createdDate = new Date(data?.createAt);
  const createdNepaliDateTime = createdDate.toLocaleString("en-US", {
    timeZone: "Asia/Kathmandu",
  });

  return {
    id: data?._id,
    name: data?.name,
    username: data?.username,
    email: data?.email,
    phone: data?.phone,
    mobile: data?.mobile,
    pan: data?.pan,
    role: data?.role,
    status: data?.status,
    profilePictureUrl: data?.profilePictureUrl,
    createdAt: createdNepaliDateTime,
    modifiedAt: modifiedNepaliDateTime,
  };
}

function formatUserForToken(data) {
  return {
    id: data?._id,
    name: data?.name,
    username: data?.username,
    email: data?.email,
    role: data?.role,
  };
}
export { formatUser, formatUserForToken };
