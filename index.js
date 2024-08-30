const express=require('express');
const bodyParser=require('body-parser');
const app=express();

//middleware to parse json bodies
app.use(bodyParser.json());

//middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({extended:true}));

//Handle GET request
app.get('/',(req,res)=>{
res.send('Hello World');
});

app.post('/data',(req,res)=>{
  console.log(req.body);
  res.send(`Recieved data: ${JSON.stringify(req.body)}`);
});
const port =5500;

app.listen(port,'127.0.0.1',()=>{
  console.log(`Server is running on http://localhost:${port}`);
});













