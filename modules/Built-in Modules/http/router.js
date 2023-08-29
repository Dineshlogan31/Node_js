const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application.json" });
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("about page");
  } else if (req.url === "/details") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const about = { Name: "Dinesh", age: 24 };
    res.end(JSON.stringify(about));
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Page Not Found");
  }
});

//for that http server we have to give the port number for listening
//through this port number we can request the server
server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
