//  and router
import { Router } from "express";
// import controllers
import { createBook, getBooks, getBookById, updateBook, deleteById } from "../controllers/books.controller.js";
// create router
const router = Router();

// create book
router.post('/books', createBook);
// see all books
router.get('/books', getBooks);
// book by id
router.get('/books/:id', getBookById);
// update boook by id
router.put('/books/:id', updateBook);
// delete boook by id
router.delete('/books/:id', deleteById);

// export the router
export default router;