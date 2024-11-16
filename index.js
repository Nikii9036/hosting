const express = require ("express");
const app =express();
app.use (express.json())
app.get("/",(req,res)=>{
    res.send ("hello from backend")

})
app.get("/photo",(req,res)=>{
    res.send ("this is my photo")
})
app.get("/video",(req,res)=>{
    res.send ("this is my video")
})
app.post ("/post",(req,res)=>{
    const {username,password}=req.body
    res.send (`this is the user name:${username} and this is the password:${password}`)
    
    
})
app.post ("/register",(req,res)=>{
    const {email,name,password}=req.body
    res.send (`this is the user email:${email} and this is the name:${name} and this is the password:${password}`)
    
    
})
app.post ("/login",(req,res)=>{
    const {email,password}=req.body
    res.send (`this is the user email:${email} and this is the password:${password}`)
    
    
})


app.listen(3000,()=>{
    console.log("you server is listening at port 3000")
})