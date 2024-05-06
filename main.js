const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  // TODO: Send the ""Hello, world!"" response
  res.writeHead(200, { "Content-Type": "text/plain" });
  // Send "Hello, world!" as the response
  res.end("Hello, world!\n");
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
  // TODO: Log a message to the console when the server starts listening on the port
});

// DO NOT EDIT BELOW THIS LINE

module.exports = { server };
