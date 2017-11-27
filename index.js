var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('<p>Hello World from <strong>Node.js</strong></p>');
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000');