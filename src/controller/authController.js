import { formatUser } from "../helper/formatUser.js";
import authServices from "../services/authServices.js";

async function login(req, res) {
  try {
    const data = req.body;
    if (!data.username) return res.status(400).send("Username is required");
    if (!data.password) return res.status(400).send("Password is required");
    const user = await authServices.login(data);
    res.cookie("authToken", user.token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    res.json({
      status: "Success",
      username: user.formatedUser.username,
    });
  } catch (error) {
    res.status(error.status).send(error.message);
  }
}

async function register(req, res) {
  try {
    const data = req.body;
    const user = await authServices.register(data);
    res.send(formatUser(user));
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getAuthUser(req, res) {
  try {
    const user = req.user;
    res.json(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const logout = (req, res) => {
  res.clearCookie("authToken", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

  res.json({ message: "Logout successful." });
};

export { login, register, getAuthUser, logout };
