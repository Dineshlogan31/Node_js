const fs = require("fs");
/*
In the context of an event loop, I/O polling involves monitoring multiple I/O 
sources (like sockets, files, or other input/output devices) for any events that 
indicate data is available for reading or space is available for writing. Instead 
of actively waiting and blocking the program until data is ready, the event loop uses 
a non-blocking approach to manage these I/O operations.
*/

/*this fs working on polling mechanism means it will not adding the callback in the I/O queue until
 the file or data is ready for that before this I/O check queue like setImmediate will be executed.
*/
fs.readFile(__filename, () => {
  console.log("This is readFile 1");
});
process.nextTick(() => {
  console.log("This is first next 1");
});
Promise.resolve().then(() => console.log("This is first promise 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);
setImmediate(() => console.log("This is setImmediate callback"));
