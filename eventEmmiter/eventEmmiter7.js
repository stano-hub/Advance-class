const EventEmitter = require('events');

// create the download emitter
const downloadEmitter = new EventEmitter();

// add listeners for each download stage
downloadEmitter.on('startDownload', () => {
  console.log('Step 1: Starting download...');
});

downloadEmitter.on('startDownload', () => {
  console.log('Step 2: Downloading file... 50%');
});

downloadEmitter.on('startDownload', () => {
  console.log('Step 3: Almost there... 90%');
});

downloadEmitter.on('startDownload', () => {
  console.log('Step 4: ✅ Download complete!');
});

// function to begin download
function downloadFile() {
  console.log('--- File Download ---');
  downloadEmitter.emit('startDownload');
}

downloadFile();
