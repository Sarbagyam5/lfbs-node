import jwt from "jsonwebtoken";

function generateJWT(data) {
  return jwt.sign(data, process.env.JWT_SECRETE);
}

function verifyToken(data) {
  return jwt.verify(data, process.env.JWT_SECRETE);
}
export { generateJWT, verifyToken };
