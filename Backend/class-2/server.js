// import modules
const http = require("http");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { rawListeners } = require("process");
require("dotenv").config();

// Create server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200);
    res.end("Home Pge");
  } else if (req.url === "/contact") {
    res.writeHead(200);
    res.end("Contact Pge");
  } else {
    res.writeHead(404);
    res.end("Page not Found");
  }
});

// Server listening
const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
