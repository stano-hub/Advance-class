// they allow  async operations to be handled in a non-blocking way.
// first operation
console.log("First operation started");

// second operation
setTimeout(() => {
    console.log("Second operation completed after 2 seconds");
}, 1000);

// third operation
console.log("Third operation started");

