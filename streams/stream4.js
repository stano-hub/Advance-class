
const fs = require("fs");

const readStream = fs.createReadStream("input.txt", { highWaterMark: 1 });
const writerStream = fs.createWriteStream("output.txt");

readStream.pipe(writerStream);

console.log("File Compied succesfully")