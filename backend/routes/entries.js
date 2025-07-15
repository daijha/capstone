import express from 'express'// import this anytime i need to use express 
const router = express.Router() // without this i cant have a routes folder... it needs to be there 
import Entry from "../models/entry.js";// i will have to interact with the model( w/ mongo query language) to access the data for endpoints.  


router.post('/create', async (req,res)=>{// use router instead of app  when using a router.
    const newEntry = await Entry.create(req.body);
    console.log("request body", req.body)
    res.status(201).json(newEntry)
})

export default router// export the router not the file name.

/*status codes:
200  ok   GET
201  created  POST
400 bad request 
500 error 
*/