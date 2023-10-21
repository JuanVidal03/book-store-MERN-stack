// import mopngoose
import mongoose from "mongoose";
// book shema
const bookModel = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  author:{
    type: String,
    trim: true,
    required: true
  },
  publishYear:{
    type: Number,
    required: true,
    trim: true
  }
},{
  timestamps: true
})

// book model
export const Book = mongoose.model('Book', bookModel);