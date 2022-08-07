const http = require('http');
const fs = require('fs');

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
  if (req.url === '/') {
    html = fs.readFileSync('./index.html');
    res.writeHead(200);
    res.end(html);
    return;
  }

  if (req.url === '/data') {
    res.setHeader('Cache-Control', 'public, max-age=31557600');
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end('{ "name": "Pham Quang Dat" }');
    return;
  }

  res.writeHead(404);
  res.end();
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});