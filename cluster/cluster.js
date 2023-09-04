//master is only charge of workers example cluster.js is a master file
//workers is incharge of handling requests
//each worker gets its own event loop,memory,and v8 instance
const cluster = require("cluster");
//cluster module which is help with the performance of the node js
const http = require("http");
const os = require("os");
console.log(os.cpus().length);

//so we have to install pm2 package auto handle to create workers
// npm i -g pm2

//for start pm2 enter cli pm2 start filename -i 0 ==> here 0 is mentioning no of workers we mentioning at the starting
//for stop pm2 stop filename
if (cluster.isMaster) {
  console.log(`master process ${process.pid} is running`);
  //we should create as many workers as there are cpu cores on the machine app is running
  cluster.fork();
  cluster.fork();
} else {
  //request will be handle by the workers
  console.log(`worker process ${process.pid} started`);
  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Home page");
    } else if (req.url === "/slow-page") {
      for (let i = 0; i <= 8000000000; i++) {}
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Slow page");
    }
  });
  server.listen(5000, () => {
    console.log("server listening on port 5000");
  });
}
