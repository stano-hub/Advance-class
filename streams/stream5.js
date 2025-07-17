const fs = require("fs");
const zlib = require("zlib");
fs.createReadStream("input.txt")

.pipe(zlib.createGzip())

//step3 : pipe the compressed data to a writable stream
.pipe(fs.createWriteStream("input.txt.gz"))

// step4 : log a message when the process is complete
.on("finish", () => {
    console.log("File Compressed successfully");
})