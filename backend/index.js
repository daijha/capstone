import express from 'express'
const app = express();
const port = 3000;


//base url
app.get('/', (req,res)=>{
    res.json("hello world")
})

app.listen(port,()=>{
    console.log(`server listening at ${port} `)
})