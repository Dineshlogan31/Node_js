/*
Hyper text transfer protocol
A protocol that defineds a format for clients and server to speak with each other
http module also inherit the evet Emitter class so if you pass any request it will emit the event.
*/

const http = require("http");

//using the http module we can create server
//this http emit the event that event listening by the callback function
const server = http.createServer((req, res) => {
  //here we write the rsponse header for that requst
  //if you send plain text ==>"Content-Type": "text/plain"
  //if you send JSON ==>"Content-Type": "application/json"
  res.writeHead(200, { "Content-Type": "application/json" });
  //we end the response here
  //   res.end("Hello Node js");
  //we cannot send object as response because response must be string or instance of Buffer
  //so we choose JSON it is understandable by http and the inbuild function for v engine
  res.end(JSON.stringify({ Name: "Dinesh", age: 24 }));
});

//for that http server we have to give the port number for listening
//through this port number we can request the server
server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
