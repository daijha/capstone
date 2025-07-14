import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./db.js";
import Entry from "./models/entry.js";// i will have to interact with the model( w/ mongo query language) to access the data for endpoints.  

const app = express();
const port = process.env.PORT;

app.use(cors()); // makes interaction from other ports okay.

//base url
app.get("/", (req, res) => {
  res.json("hello world backend");
});

app.listen(port, () => {
  console.log(`server listening at ${port} `);
  //add the db connection in the app.listen
  connectDb();
});
