// imnport mongo schema
import { Book } from "../models/book.model.js";

// create a book
export const createBook = async(req, res) => {

  // body request
  const {title, author, publishYear} = req.body;

  try {
    // verifing if all the data is ok
    if(title && author && publishYear){
      const uploadBook = await Book.create({title, author, publishYear});
      res.json({uploadBook});
      // in case there are not all the data
    }else{
      res.status(500).send('Please fill all the fields: title, author, publishYear');
    }

  } catch (error) {

    console.log(`Error creating a book: ${error.message}`);
    res.status(500).json({message: error});

  }

}

// all boooks
export const getBooks = async(req,res) => {

  try {
    
  } catch (error) {
    console.log(`Error getting all books: ${error.message}`);
    res.status(500).json({message: error});
  }

}