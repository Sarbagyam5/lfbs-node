import { verifyToken } from "../utils/jwt.js";

function auth(req, res, next) {
  const cookie = req.headers.cookie;
  if (!cookie) {
    return res.status(401).send("Unauthorized");
  }

  const token = cookie.split("=")[1];
  try {
    const verifyAuthToken = verifyToken(token);

    if (!verifyAuthToken) return res.status(401).send("Unauthorized");
    req.user = verifyAuthToken;
    next();
  } catch (error) {
    return res.status(401).send("Unauthorized: Invalid token");
  }
}
export default auth;
