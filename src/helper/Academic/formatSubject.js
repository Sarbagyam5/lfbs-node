function formatSubject(data) {
  return {
    id: data?._id,
    name: data?.name,
    shortName: data?.shortName,
  };
}

export default formatSubject;
