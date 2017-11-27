var http = require('http');
var tmp = 'node.js';
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>
      <p>Hello World from <strong>${tmp}</strong></p>
    </body>
  </html>
  `);
  response.end();
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888');