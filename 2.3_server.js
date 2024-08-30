const http1= require('http');
const fs=require('fs')
const path =require('path');

// create server
const server= http1.createServer((req,res)=>{
let filePath= path.join('public',req.url==='/' ? 'index.html' : req.url+ '.html');
fs.readFile(filePath,(err,content)=>{
  if(err){
    if(err.code=='ENOENT'){
      res.writeHead(404,{'Content-Type':'text/html'});
      res.end('<h1>404 Not Found</h1>');
    }else{
      res.writeHead(500);
      res.end(`Server Error: ${err.code}`);
    }
  }
  else{
    res.writeHead(200,{'Content-Type':'text/html'});
      res.end(content);
  }
})
})
 server.listen('5500',"127.0.0.1",()=>{
  console.log('Mehardeep 2210997287')
  console.log(`Server is running on 5500`);
  })