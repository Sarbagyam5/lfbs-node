import mongoose from "mongoose";
async function connectDb() {
  const mongoURL = process.env.MONGODB_URL;
  try {
    await mongoose.connect(mongoURL);
    console.log("Database connceted succesfully");
  } catch (error) {
    console.log("Database Error:", error);
  }
}

export default connectDb;
