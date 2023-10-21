import mongoose from "mongoose";
// import DB URL
import { mongoDBURL } from "../config.js";

export const mongoConnection = async() => {

  try {
    await  mongoose.connect(mongoDBURL);
    console.log('<<< DB CONNECTED >>>');
  } catch (error) {
    console.log('Error conneting DB');
  }

}