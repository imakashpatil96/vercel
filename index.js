const express = require('express');

const app = express();


app.get('/', (req,res)=>{
    res.send({message:"server running", project:"node project deploy on vercel"})
})
app.get('/videos', (req,res)=>{
    res.send({message:"svideos page", project:"node project deploy on vercel videos page"})
})
app.listen(5000,()=> console.log("server is running on port 5000"))