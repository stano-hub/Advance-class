// import the 'fs' module
// use utf -8 encoding
const fs = require("fs");   

// create a readable stream from the file 'input.txt'
const readStream = fs.createReadStream("input.txt", {highWaterMark : 1});

readStream.on("data", (chunk) => {
    
    console.log("New packets of data received" + chunk.toString());
});