const http = require('http');

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
  // https://nodejs.org/dist/latest-v14.x/docs/api/http.html#http_response_setheader_name_value
  res.setHeader('Set-Cookie', ['yummy_cookie=choco', 'tasty_cookie=strawberry']);
  res.writeHead(200);
  res.end('Hello NodeJS HTTP module!');
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});