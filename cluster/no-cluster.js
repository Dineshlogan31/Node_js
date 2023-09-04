//Node is single threaded
//no matter how many cores you have,node only uses a single core of your cpu
//if workload is heave your server will get freeze and or it will take time because of workload
//so we move to cluster

//first we will check no-clutser this router will take more time because of forloop workload so the home page also getting delayed

const http = require("http");

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
