const path = require("path");

console.log(__filename);
console.log(__dirname);

console.log(path.basename(__filename, ".js"));
console.log(path.basename(__dirname));

console.log(path.extname(__filename));
console.log(path.extname(__dirname));

console.log(path.parse(__filename));
console.log(path.parse(__dirname));

console.log(path.format(path.parse(__filename)));

console.log(path.isAbsolute(__filename));

console.log(path.join("folder1", "folder2", "index.js"));
console.log(path.join("\\folder1", "\\folder2", "\\index.js"));
console.log(path.join("\\folder1", "\\folder2", "..\\index.js"));

console.log(path.normalize("\\\folder2\\\\folder3\\\\app.js"));

console.log(path.resolve("folder1", "folder2", "index.js"));
console.log(path.resolve("/folder1", "folder2", "index.js"));
console.log(path.resolve("/folder1", "//folder2", "index.js"));
console.log(path.resolve("/folder1", "//folder2", "../index.js"));
console.log(path.resolve(__dirname, "data.json"));
