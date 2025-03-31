const http = require("http");

const myServer = http.createServer((req, res) => {
  res.end("hellow ji");
});

myServer.listen(8000, () => {
  console.log("server is started");
});
