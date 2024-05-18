const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  console.log("Request Received");
  // TODO: Send the ""Hello, world!"" response
  res.write("Hello, world!");
  res.end();
});

server.listen(port, () => {
  // TODO: Log a message to the console when the server starts listening on the port
  console.log("starts listening on the port");
});

// DO NOT EDIT BELOW THIS LINE

module.exports = { server };
