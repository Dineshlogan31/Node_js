const { parentPort } = require("worker_threads");
let j = 0;
for (let i = 0; i <= 8000000000; i++) {
  j++;
}

//here we are emit the event name called message
parentPort.postMessage(j);
