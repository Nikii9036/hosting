const express = require ("express");
const app =express();
const port = process.env.PORT || 4000;
const cors =require("cors")
app.use(cors());
app.get('/',(req,res)=>{
    res.send ('hello world')
})
app.listen(port,()=>{
    console.log(`example app listining on port'${port}`)
})
