const http1= require('http');
const fs = require('fs');
const server= http1.createServer((req, ress)=>{
  fs.appendFile('new.txt','Hello world',function(err){
    if(err) throw err;
    console.log('new file created successfully');
  });
  });
  server.listen(5500,"127.0.0.1",()=>{
  console.log("Server is running");
  })