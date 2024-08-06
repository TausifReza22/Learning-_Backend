const express =require("express");
const app= express();
const port=3000;

app.use(express.urlencoded({extended: true}))

app.get('/', (req,res) =>{
    console.log(req);
    res.send("Hello World");
});

app.post('/sum',(req,res)=>{
    console.log(req.body);

    let num1=Number(req.body.num1);
    let num2=Number(req.body.num2);
    let sum =num1 + num2;
    res.send(`sum is ${sum}`)


})

app.listen(port,()=>{
    console.log(`my server is running on ${port}`);
});