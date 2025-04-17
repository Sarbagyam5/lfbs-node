import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  name: String,
  code: String,
});

const Subject = mongoose.model("Subject", subjectSchema);
