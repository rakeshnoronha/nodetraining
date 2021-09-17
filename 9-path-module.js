const path = require("path");

console.log(path.sep);

console.log(path.join());

const filePath = path.join("/javascript", "Clock", "index.html");
console.log(filePath);

console.log(path.basename(filePath));

const absolute = path.resolve(__dirname, "javascript", "Clock", "index.html");
console.log(absolute);
