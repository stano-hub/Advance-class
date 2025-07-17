 const fs =  require("fs")

 // read the file input.txt
const readableStream = fs.createReadStream("input.txt","utf-8")

readableStream.on("data", (chunk) => {

    const newText  = chunk.trim().toUpperCase()
    console.log("The read packects of data from input.txt are: ", newText)
});

readableStream.on("end", () => {
    console.log("The file input.txt has been read completely")
});
    
