const express = require ("express");
const app =express();
const fs =require("fs")
app.use(express.json())
app.get("/post",(req,res)=>{
    

    fs.readFile("./a.txt","UTF-8",(err,DATA)=>{
        res.send ("success")
    })

    
    
})
app.listen(3000,()=>{
    console.log("you server is listening at port 3000")
})