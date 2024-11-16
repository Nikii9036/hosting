const fs =require("fs");
//fs.writeFile("./a.txt","helo this is niki",(err)=>{
   // console.log("sucess")
//})
fs.readFile("./a.txt","UTF-8",(err,data)=>{
    console.log(data)
})