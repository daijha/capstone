import mongoose from "mongoose";

// this is async because accessing a db takes time
async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error);
  }
}

export default connectDb;
