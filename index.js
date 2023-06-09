const express = require('express')
const app=express()
app.use(express.json())

app.get('/add',(req,res) => {
    const num1=Number(req.query.num1);
    const num2=Number(req.query.num2);
    const num3=Number(req.query.num3);
    if(isNaN(num1) || isNaN(num2) || isNaN(num3)){
        console.log("not a valid output");
        res.send({Error:"please provide a valid input"})
        return
    }
    const sum =num1+num1+num3;

    console.log(sum)
    res.send({sum});

});
app.post('/sub',(req,res) => {
    const num1=Number(req.body.num1);
    const num2=Number(req.body.num2);
    // const num3=Number(req.query.num3);
    if(isNaN(num1) || isNaN(num2) ){
        console.log("not a valid output");
        res.send({Error:"please provide a valid input"})
        return
    }
    const sub =num2-num1;

    console.log(sub)
    res.send({sub});

});
app.post('/sub',(req,res) => {
    const num1=Number(req.body.num1);
    const num2=Number(req.body.num2);
    // const num3=Number(req.query.num3);
    if(isNaN(num1) || isNaN(num2) ){
        console.log("not a valid output");
        res.send({Error:"please provide a valid input"})
        return
    }
    const sub =num2-num1;

    console.log(sub)
    res.send({sub});

});
app.post('/sub',(req,res) => {
    const num1=Number(req.body.num1);
    const num2=Number(req.body.num2);
    // const num3=Number(req.query.num3);
    if(isNaN(num1) || isNaN(num2) ){
        console.log("not a valid output");
        res.send({Error:"please provide a valid input"})
        return
    }
    const sub =num2-num1;

    console.log(sub)
    res.send({sub});

});
app.post('/mul',(req,res) => {
    const num1=Number(req.body.num1);
    const num2=Number(req.body.num2);
    // const num3=Number(req.query.num3);
    if(isNaN(num1) || isNaN(num2) ){
        console.log("not a valid output");
        res.send({Error:"please provide a valid input"})
        return
    }
    const mul =num2*num1;

    console.log(mul)
    res.send({mul});

});

app.post('/divide',(req,res) => {
    const num1=Number(req.body.num1);
    const num2=Number(req.body.num2);
    // const num3=Number(req.query.num3);
    if(isNaN(num1) || isNaN(num2) ){
        console.log("not a valid output");
        res.send({Error:"please provide a valid input"})
        return
    }
    const divide =num2/num1;

    console.log(divide)
    res.send({divide});

});

app.get('/addList', (req, res) => {
    const num = req.query.Numbers;
    const Numbers = num.split(",");
    console.log(Numbers);
    let sum = 0;
    for (let i = 0; i < Numbers.length; i++) {
      sum += Number(Numbers[i]);
    }
    res.send({ sum });
  });
app.get('/multiplyList', (req, res) => {
    const num = req.query.Numbers;
    const Numbers = num.split(",");
    console.log(Numbers);
    let multiply = 1;
    for (let i = 0; i < Numbers.length; i++) {
      multiply *= Number(Numbers[i]);
    }
    res.send({ multiply });
  });
  




app.listen(3000,()=>{
    console.log("Server is running");
})
