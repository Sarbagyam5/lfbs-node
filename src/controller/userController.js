import formatUser from "../helper/formatUser.js";
import userServices from "../services/userServices.js";

async function updateUserInfo(req, res) {
  const id = req.user.id;
  const image = req.file;
  const data = req.body;

  if (!image && !data) return res.status(400).send("Empty data");
  try {
    const updatedUser = await userServices.updateUserInfo(image, data, id);
    return res.json(formatUser(updatedUser));
  } catch (error) {
    res.status(400).send(error.message || "Cant update info");
  }
}

async function getUserById(req, res) {
  const id = req.params.id;
  const authId = req.user.id;
  if (!id) return res.status(400).send("User Id is requird ");
  if (id != authId) return res.status(401).send("Unauthorized");

  try {
    const user = await userServices.getUserById(id);
    return res.json(formatUser(user));
  } catch (error) {
    res
      .status(error.status || 400)
      .send(error.message || "Something went wrong");
  }
}
export { updateUserInfo, getUserById };
