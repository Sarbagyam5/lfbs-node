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
  mobile: {
    type: Number,
  },
  phone: {
    type: Number,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  pan: {
    type: Number,
  },
  status: {
    type: String,
    default: "Active",
  },

  role: {
    type: [String],
    required: true,
  },
  profilePictureUrl: String,
  createAt: {
    type: Date,
    default: Date.now(),
  },
  modifiedAt: {
    type: Date,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
