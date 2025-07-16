import express from "express"; // import this anytime i need to use express
const router = express.Router(); // without this i cant have a routes folder... it needs to be there
import Entry from "../models/entry.js"; // i will have to interact with the model( w/ mongo query language) to access the data for endpoints.

router.get("/", async (req, res) => {
  // use router instead of app  when using a router. to read the entries
  try {
    const readEntries = await Entry.find();
    res.status(200).json(readEntries);
  } catch {
    res.status(500).json({ message: "error!" });
  }
});

router.post("/create", async (req, res) => {
  // to make the entry

  try {
    const newEntry = await Entry.create(req.body);
    res.status(201).json(newEntry);
  } catch {
    res.status(500).json({ message: "error!" });
  }
});

router.get("/entries/:id", async (req, res) => {
  // reads one entry
  try {
    const readEntry = await Entry.findById(req.params.id);
    res.status(200).json(readEntry);
  } catch {
    res.status(500).json({ message: "error!" });
  }
});

router.put("/entries/:id", async (req, res) => {
  // id is needed to edit entry
  try {
    const editEntry = await Entry.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }); // {new:true} is mongoose syntax that returns the updated document
    res.status(200).json(editEntry);
  } catch {
    res.status(500).json({ message: "error!" });
  }
});

router.delete("/entries/:id", async (req, res) => {
  // id is needed to edit entry 
  try{
 const deleteEntry = await Entry.findByIdAndDelete(req.params.id);
  res.status(200).json(deleteEntry);
  }catch {
    res.status(500).json({ message: "error!" });
  }
});
 

export default router; // export the router not the file name.


/*status codes:
200  ok   GET
201  created  POST
400 bad request 
500 error 
*/
