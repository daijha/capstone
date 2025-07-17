import express from "express"; // import this anytime i need to use express
const router = express.Router(); // without this i cant have a routes folder... it needs to be there
import Entry from "../models/entry.js"; // i will have to interact with the model( w/ mongo query language) to access the data for endpoints.

router.get("/", async (req, res) => {
  // use router instead of app  when using a router. to read all the entries
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
  const { id } = req.params; // takes the _id  from the url
  const requesterId = req.body.userId; // renames the userId because it cant access the entry model.
  try {
    const entry = await Entry.findById(id); // finds the entry by id (mongo syntax)
    console.log('reached')
    if (!entry) {
      return res.status(404).json({ message: "Entry was not found" });
    }
    console.log(entry.userId)
    if (entry.userId !== requesterId) {
      return res
        .status(403)
        .json({ message: " you can't just delete someone else's entry..." });
    } else {
      const deleteEntry = await Entry.findByIdAndDelete(req.params.id);
      res.status(200).json(deleteEntry);
    }
  } catch (error) {
    res.status(500).json({ message: "error!" });
  }
});

export default router; // export the router not the file name.

/*status codes:  
200  ok   GET
201  created  POST
400 bad request 
403 unauthorized access
500 error 
*/
