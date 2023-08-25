//To achieve promises in node we can import fs promises
const fs = require("node:fs/promises");

//To handle promises we can use then catch here
fs.readFile("./file1.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//To handle promises we can use async and await
async function readFile() {
  try {
    const data = await fs.readFile("./file1.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
readFile();
