function formatSubject(data) {
  return {
    id: data?._id,
    name: data?.name,
    shortname: data?.shortName,
  };
}

export default formatSubject;
