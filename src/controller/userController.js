function updateUserInfo(req, res) {}
const id = req.user.id;
const image = req.file;
const data = req.body;
if (!image || !data) return res.status(400).send("Empty data");
try {
  return userServices.updateUserInfo(image, data, id);
} catch (error) {
  res.status(400).send("Cant update info");
}
export { updateUserInfo };
