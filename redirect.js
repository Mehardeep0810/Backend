const http =require('http');
const url=require('url');
const server= http.createServer((req, ress)=>{
if (req.url==='/'){
  ress.writeHead(301,{Location: '/new-url'});
  ress.end();
}
else if(req.url==='/new-url'){
  ress.statusCode=200;
  ress.setHeader('Content-Type', 'text/plain');
  ress.end('You have been redirected\n');
}
else{
  ress.statusCode=404;
  ress.end('Not Found\n')
}
});
server.listen(5500,"127.0.0.1",()=>{
console.log('Server is running at http://127.0.0.1:5500/');
})