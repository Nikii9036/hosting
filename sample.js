const express =require("express");
const app =express();
const mongoose =require("mongoose");
app.use(express.json())
mongoose.connect("mongodb://localhost:27017")
.then(()=>{
    console.log("DB connected")
})
.catch(()=>{
    console.log("not connected")
})
const userschema=new mongoose.Schema({
    name :{type:String}
})
const user=mongoose.model("user",userschema)
app.post("/",(req,res)=>{
    const username=req.body.username;
    const userDetail=new user({
        name :username
    })
    userDetail,save()
    .then(()=>{res.send("sucess")})
    .catch(()=>{res.send("error")})
})
app.listen (3000,()=>{
    console.log("your server is listing at port 3000")
})