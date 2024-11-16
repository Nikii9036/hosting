const express = require ("express");
const app =express();
const fs =require("fs")
app.post ("/",(req,res)=>{
    const username=req.headers.username;
    const email=req.headers.email;
    const password=req.headers.password;
    const user={
        username:username,
        email:email,
        password:password
        
    }
    res.send(username,email,password)

})
app.listen(3000,()=>{
    console.log("started")
})