// import dependencies
import express from "express";
// import port
import { PORT } from "./config.s";

const app = express();




// running server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
})