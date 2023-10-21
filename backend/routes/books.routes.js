//  and router
import { Router } from "express";
// import controllers
import { createBook, getBooks } from "../controllers/books.controller.js";
// create router
const router = Router();

// create book
router.post('/book', createBook);
// see all books
router.get('/books', getBooks);

// export the router
export default router;