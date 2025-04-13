import User from "../models/User";
import uploadFile from "../utils/file";

async function updateUserInfo(file, data, id) {
  try {
    const image = uploadFile(file);
    return await User.findByIdAndUpdate(id, {
      ...data,
      pofilePictureUrl: image.url,
    });
  } catch (error) {
    throw { staus: 400, message: "cant update information" };
  }
}

export default { updateUserInfo };
