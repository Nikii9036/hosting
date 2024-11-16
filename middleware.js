const express =require("express")
const app=express();
app.use(express.json())
function sampleMiddleleware(req,res,next){
    const username="nikita";
    const postmanname =req.body.username;
    if(username ===postmanname){
        next()
    }
    
else{
    res.send("username is wrong")
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
app.post("/photos",sampleMiddleleware,(req,res)=>{
    res.send("this is photo")
})

app.listen(3000,()=>{
    console.log("started")
})