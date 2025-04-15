import User from "../models/User.js";
import uploadFile from "../utils/file.js";

async function updateUserInfo(file, data, id) {
  try {
    if (file) {
      const [image] = await uploadFile([file]);
      data = { ...data, profilePictureUrl: image.url };
      return await User.findByIdAndUpdate(id, data, { new: true });
    }
    return await User.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    throw { status: 400, message: "cant update informations" };
  }
}

async function getUserById(id) {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw { status: 400, message: "Can't find the User" };
  }
}
export default { updateUserInfo, getUserById };
