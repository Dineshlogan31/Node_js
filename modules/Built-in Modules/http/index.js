/*
Hyper text transfer protocol
A protocol that defineds a format for clients and server to speak with each other
http module also inherit the evet Emitter class so if you pass any request it will emit the event.
*/

const http = require("http");
const fs = require("fs");

//using the http module we can create server
//this http emit the event that event listening by the callback function
const server = http.createServer((req, res) => {
  let name = "Dinesh Logan";
  res.writeHead(200, { "Content-Type": "text/html" });
  //if you want to send html file give Content Type as text/html
  //or you can read orstream html file using fs module
  let html = fs.readFileSync("./index.html", "utf-8");
  //you can insert the dynamic values inside the html template
  html = html.replace("{{name}}", name);
  res.end(html);
  //or you can use pipe method
  fs.createReadStream(__dirname + "/index.html").pipe(res);
  //otherwise you can send as a readfile
});

//for that http server we have to give the port number for listening
//through this port number we can request the server
server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
