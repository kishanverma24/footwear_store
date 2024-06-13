import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()
const Connection = async () => {
  try {
    mongoose.connect(process.env.URL);
    console.log("Connected to Database");
  } catch (error) {
    console.log("Error while connecting to database: " + error);
  }
};
Connection();
