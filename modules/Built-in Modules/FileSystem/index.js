// fs is the built in module in node js so we have to import first
const fs = require("node:fs");

//node js is internally uses buffer to read and write the files
//readFileSync method accept first param is file path and second is  character encoding
//node will give buffer hexadecimal format
//<Buffer 48 65 6c 6c 6f 20 49 20 61 6d 20 64 69 6e 65 73 68 20 6c 6f 67 61 6e>
const fileContent = fs.readFileSync("./file1.txt");
console.log(fileContent);

//utf-8 will give human readable format
//Hello I am dinesh logan
const fileContent1 = fs.readFileSync("./file1.txt", "utf-8");
console.log(fileContent1);

/* The main purpose of node js we have to run code non blocking like
asynchronously we can use asynchronous read file system here */

// first param is file path and second one is optional the character encoding
//and third one is call back that is get two arguments from the readFile method first one is error
//second is data
fs.readFile("./file1.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

/* How to write contents in file */

//this method write content into the file the first params is filepath and second one is content
//it will create a greet.txt file in this folder
fs.writeFileSync("./greet.txt", "Hello Node js");

/* This method write content asynchronously but this content is overridden in the existing file */
fs.writeFile("./greet.txt", "Hello World", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File OverWritten");
  }
});

/* To avoid overridden and for append the content in the file
we can use the third optioanl object paramater called flag 
that a means append
*/
fs.writeFile("./greet.txt", " Hello World!!!", { flag: "a" }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File Appended");
  }
});
