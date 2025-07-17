const fs = require('fs');



const writableStream = fs.createWriteStream('output.txt');


writableStream.write ("Hello Stanley , How have you been?")

writableStream.end();

writableStream.on('finish', () => {
    console.log('All data has been written to output.txt');
});

writableStream.on('error', (err) => {
    console.error('Error writing to output.txt:'+ err);
});

