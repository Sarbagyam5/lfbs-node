import User from "../models/User.js";
import { comparePassword, hashPassword } from "../utils/password.js";

async function login(data) {
  try {
    const authUser = await User.findOne({ username: data.username });
    if (!authUser) {
      throw new Error("Username doesnt match");
    }
    const isMatch = await comparePassword(data.password, authUser.password);
    if (!isMatch) throw new Error("Password doesnt match");
    return authUser;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function register(data) {
  try {
    const isUserExist = await User.findOne({ username: data.name });
    if (isUserExist) throw new Error("username already exist");
    data.password = await hashPassword(data.password);
    const user = User.create(data);

    return user;
  } catch (error) {
    throw error.message;
  }
}
export default { login, register };
