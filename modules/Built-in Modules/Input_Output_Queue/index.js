const fs = require("fs");
//First priority is microtask queue callback
//then timer queue call back
//then I/O callback will execute
//part 1
fs.readFile(__filename, () => {
  console.log("This is readFile 1");
});

process.nextTick(() => {
  console.log("This is first next 1");
});

Promise.resolve().then(() => console.log("This is first promise 1"));

//part 2
//if you are enter timer callback and I/O callback the execution order is not sequential it will rearrange for every iteration.
//the order of execution is based on the cpu time
setTimeout(() => console.log("this is setTimeout 1"), 0);
fs.readFile(__filename, () => {
  console.log("This is readFile 1");
});

//part 3
//I/O callbacks are executed after microtask queue callbacks and timer queue callbacks
