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
    // get all books
    const books = await Book.find({});
    res.json({
      count: books.length,
      books
    });

  } catch (error) {
    console.log(`Error getting all books: ${error.message}`);
    res.status(500).json({message: error.message});
  }

}
// book by id
export const getBookById = async(req,res) => {
  // get the param
  const { id } = req.params;

  try {
    // get all books
    const book = await Book.findById(id);
    res.json({book});

  } catch (error) {
    console.log(`Error getting the book: ${error.message}`);
    res.status(500).json({message: error.message});
  }

}
// update a book
export const updateBook = async(req, res) => {
  // getting the book id and the body
  const { id } = req.params;
  const { title, author, publishYear } = req.body;

  try {
    // check that all the is fill
    if(title && author && publishYear){
      // finding and updating the book
      const updatedBook = await Book.findByIdAndUpdate(id, req.body);

      if(updateBook){
        res.status(202).json({
          message: 'Book updated!',
          updatedBook,
        })
      } else{
        res.status(404).json({message: 'Book not found'});
      }

      // in case there are not all the data
    }else{
      res.status(500).send('Please fill all the fields: title, author, publishYear');
    }
  } catch (error) {
    console.log(`Error updating a book: ${error.message}`);
    res.status(500).json({message: error.message});
  }

}
// delete a book
export const deleteById = async(req, res) => {
  // getting param
  const { id } = req.params;

  try {
    const result = await Book.findByIdAndDelete(id);
    
    if(result){
      res.status(200).json({message: "Book deleted successfully!"});
    } else {
      res.status(404).json({message: "Book not found"});
    }

  } catch (error) {
    console.log(`Error deleting a book: ${error.message}`);
    res.status(500).json({message: error.message});
  }

}