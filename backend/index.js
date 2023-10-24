// import dependencies
import express from "express";
// import configurations
import { PORT } from "./config.js";
// import database
import { mongoConnection } from "./DB/mongoDB.js";
// import routes
import bookRouter from "./routes/books.routes.js";
// import cors
import cors from "cors";

const app = express();
app.use(express.json());
// use cors
app.use(cors());
/*
app.use(
  cors({
    origin: 'http:localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
  })
);
*/
// use routers
app.use('/api', bookRouter);


// running server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
mongoConnection(); // running DB