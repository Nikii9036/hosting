const express = require ("express");
const app =express();
app.use(express.json())
app.post("/",(req,res)=>{
    const token=req.query.token;
    res.send(token)
    })
    
app.listen(3000,()=>{
    console.log("you server is listening at port 3000")
})