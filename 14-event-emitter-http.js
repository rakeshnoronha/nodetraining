const http = require("http");

const server = http.Server();

server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000);
