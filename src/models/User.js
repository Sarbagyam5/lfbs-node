import mongoose, { Types } from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  role: {
    type: [String],
    required: true,
  },
  profilePictureUrl: String,
});

const User = mongoose.model("User", userSchema);

export default User;
