
const express=require('express');
const fs=require('fs')
const app=express();

const PORT=3000;
// const data=new Date();
// const time=data.getTime();

// fs.writeFile(`${data.getDate()}-${data.getTime()}.txt`,`${time}`,(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("file created successfully")
//     }
// });
app.get('/',(req,res)=>{
    res.send("hello from express");
    
})
app.get('/home',(req,res)=>{
    res.send("hello from homepage")
})

app.listen(PORT,()=>{
    console.log(`port running in ${PORT}`)
})