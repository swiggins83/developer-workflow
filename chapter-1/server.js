const http = require('http');

const handleRequest = function(request, response) {
  console.log(`Received request for URL: ${request.url}`);

  response.writeHead(200);
  response.end('ayyyyy!');
};

const server = http.createServer(handleRequest);
server.listen(8080);
