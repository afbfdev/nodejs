console.log('Hello world')
//$ node hello-world.js

//---Create a Server----//
// 1---Import Required Module
var http = require("http");

// 2---Create server

http.createServer(function(request, response) {
    response.writeHead(200,{'content-Type': 'text/plain'});
    response.end('Hello Node!!!\n')
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');

