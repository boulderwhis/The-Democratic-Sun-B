port = process.env.PORT || 80

const http = require('http'),
      server = http.createServer();

server.on('request',(request,response)=>{
   response.writeHead(200,{'Content-Type':'text/plain'});
   response.write('Hello world');
   response.end();
});
server.listen(80,()=>{
  console.log('Node server created at port 80');
});