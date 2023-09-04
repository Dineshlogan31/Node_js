const http = require("http");
//worker thread module enables the use of thread that execute javascript in parallel
//cluster module can be used to run multiple instnces of node js that can be distributed work
//worker_thread module allows running multiple application threads with in a single node js instance
//when process worker_thread isolation  is not needed,that is no separate instances of v8,event loop,and memory are needed,you should use work threads
const { Worker } = require("worker_threads");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page");
  } else if (req.url === "/slow-page") {
    //this instance take a worker-thread file path
    //so the workload will be handle of worker-thread like child thread
    const worker = new Worker("./worker-thread.js");
    //here we are create listeners for this event
    worker.on("message", (j) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Slow page ${j}`);
    });
  }
});
server.listen(5000, () => {
  console.log("server listening on port 5000");
});
