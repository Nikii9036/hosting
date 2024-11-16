const express =require("express")
const app=express();
app.use(express.json())
function sampleMiddleleware(req,res,next){
    const username="nikita";
    const password="niki";
    const login={
        username,password
    }
    const postmanname =req.body.login;
    if(login ===postmanname){
        next()
    }
    
else{
    res.send("invalid user name and password")
}
}
function sampleMiddleleware(req,res,next){
    const ip="12345";
    const ippostman=req.headers.ip;
    if(ip === ippostman){
        next()

    }
    else{
        res.send("wrong ip address")
    }
}
app.post("/ip",sampleMiddleleware,(req,res)=>{
    res.send("valid ip")
})

app.post("/",sampleMiddleleware,(req,res)=>{
    res.send("sucess")
})

app.listen(3000,()=>{
    console.log("started")
})