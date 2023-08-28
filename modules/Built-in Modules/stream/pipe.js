/*
The pipe method connects a readable stream to a writable stream, automatically managing the flow of data
 between them. This can be particularly helpful when you want to avoid loading large amounts of data 
 into memory all at once

 Chaining: pipe returns the destination stream, allowing you to chain multiple pipes together.
*/
const fs = require("fs");

const readableStream = fs.createReadStream("./file1.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

const writableStream = fs.createWriteStream("./file2.txt");
//you can do multiple chaining operation because pipe will return destination stream
readableStream.pipe(writableStream);
