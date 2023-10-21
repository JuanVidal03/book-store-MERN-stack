// import dependencies
import express from "express";
// import configurations
import { PORT } from "./config.js";
// import database
import { mongoConnection } from "./DB/mongoDB.js";
// import routes
import bookRouter from "./routes/books.routes.js";

const app = express();
app.use(express.json());
// use routers
app.use('/api', bookRouter);


// running server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
mongoConnection(); // running DB