/*Stream is a sequence of data that is being moved from one file to another over a time.
Work with data in chunks instead of waiting for the entire data to be available at once.
Stream is infact a built in module that inherits from the event emitter class.
other modules internally use streams for their functioning
*/
const fs = require("fs");

//create readableStream method in file module
//this method will emit the event because stream is inherited from Event Emitter class
const readableStream = fs.createReadStream("./file1.txt", {
  //it will character encoding
  encoding: "utf-8",
  //this will pass data as 2 bits
  /*
  He
ll
o
No
de
 j
s
  */
  highWaterMark: 2,
});

const writableStream = fs.createWriteStream("./file2.txt");

//here we write listenner for that event emitter
readableStream.on("data", (chunk) => {
  console.log(chunk);
  writableStream.write(chunk);
});

/*Streams are 4 types
1.Reading stream-for read the data
2.write stream-for writing into the file
3.duplex stream-both read and write example is socket
4.Transform stream-that can modify or transform the data as it is write and read
*/
