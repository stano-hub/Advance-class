
const EventEmitter = require('events');


const emitter = new EventEmitter();

emitter.on("start", (name) => {
    console.log(`Good Morning, ${name}, I hope you are doing well!`);
})

// . emmit is used to trigger the event
emitter.emit("start", "stanley");
