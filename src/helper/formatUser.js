function formatUser(data) {
  return {
    id: data._id,
    name: data.name,
    username: data.username,
    email: data.email,
    role: data.role,
  };
}
export default formatUser;
