const express = require ("express");
const app =express();
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render('Home')
})

app.listen(3000,()=>{
    console.log("you server is listening at port 3000")
})