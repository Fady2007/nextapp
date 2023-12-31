import mongoose from "mongoose";

const connectdb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Testdb");

    console.log("Connected to db !");
  } catch (error) {
    console.log(error);
  }
};

export default connectdb;
