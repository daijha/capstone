import express from 'express'
import cors from 'cors'



const app = express();
const port = process.env.PORT;

app.use(cors()) // makes interaction from other ports okay to do 


//base url
app.get('/', (req,res)=>{
    res.json("hello world backend")
})

app.listen(port,()=>{
    console.log(`server listening at ${port} `)
})