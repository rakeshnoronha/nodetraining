const fs = require("fs");
const http = require("http");

http
  .createServer((req, res) => {
    const filestream = fs.createReadStream("./content/big.txt", "utf-8");
    filestream.on("open", () => {
      filestream.pipe(res);
    });
    filestream.on("error", (err) => {
      console.log(err);
    });
  })
  .listen(5000);
