const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("This is our about page");
  }
  res.end(`<h1>Oooops</h1>
  <a href='/'>back to home page</a>`);
});

server.listen(5000);
