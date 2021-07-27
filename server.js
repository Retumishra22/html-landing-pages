const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.json());

app.get('/1',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})
app.get('/15',(req,res)=>{
    res.sendFile(__dirname+'/public/temp15.html')
})
app.get('/17',(req,res)=>{
    res.sendFile(__dirname+'/public/temp17.html')
})
app.get('/13',(req,res)=>{
    res.sendFile(__dirname+'/public/temp13.html')
})

app.listen(PORT,()=>{
    console.log('app running');
})