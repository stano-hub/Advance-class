// we need to import the events which is a core modlule in nodejs
const EventEmitter = require('events');

/// create an instance of the events
const eventEmitter = new EventEmitter();

eventEmitter.on("start", () => {
    console.log("Good Morning, how are you?");
})

// . emmit is used to trigger the event
eventEmitter.emit("start");