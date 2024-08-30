const http1= require('http');
const url1 = require('url');
// create server
const server= http1.createServer((req,res)=>{
//Parse the request URL
  const parsedUrl = url1.parse(req.url,true);
//Set the response header
  res.setHeader('Content-Type','text/plain');
//Handle different paths
  if(parsedUrl.pathname==='/'){
    res.statusCode =200;
    res.end('Hello World');
  }
  else if(parsedUrl.pathname==='/about'){
    res.statusCode=200;
    res.end('About Us')
  }
  else if(parsedUrl.pathname==='/contact'){
    res.statusCode=200;
    res.end('Contact Us')
  }
  else{
    res.statusCode=404;
    res.end('Page Not Found')
  }
})

const PORT = process.env.PORT||5500
server.listen(PORT,"127.0.0.1",()=>{
  console.log('Mehardeep 2210997287')
  console.log(`Server is running on ${PORT}`);
  })