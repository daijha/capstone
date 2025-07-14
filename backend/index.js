import express from 'express'
import cors from 'cors'
const app = express();
const port = 3000;

app.use(cors())


//base url
app.get('/', (req,res)=>{
    res.json("hello world backend")
})

app.listen(port,()=>{
    console.log(`server listening at ${port} `)
})