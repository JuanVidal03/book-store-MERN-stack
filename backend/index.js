// import dependencies
import express from "express";
// import configurations
import { PORT } from "./config.js";
// import database
import { mongoConnection } from "./DB/mongoDB.js";

const app = express();
app.use(express.json());

// principal route
app.get('/', (req, res) => {

  try {
    res.send('this is a test');

  } catch (error) {
    console.log(error);
    res.json(error);
  }

})


// running server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
mongoConnection(); // running DB