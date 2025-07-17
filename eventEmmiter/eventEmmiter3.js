// import the events 
const EventEmitter = require('events');

// create an instance of the events
const bulbEmitter = new EventEmitter();

// create a function that will be called when the event is emitted
bulbEmitter.on("bulbSwithchedOn", (location) => {
    console.log(`The bulb in the ${location} is switched on.`);
})

bulbEmitter.on("bulbSwithchedOn", (location) => {
    console.log(`💡The power consumption check started in the ${location}.`);
    
})

bulbEmitter.on("bulbSwithchedOn", (location) => {
    console.log(`🌟App Updated:${location} bulb is switched on.`);
})

function switchOnBulb(location) {
    console.log("\n ---Swithching on the bulb---");
    // emit the event
    bulbEmitter.emit("bulbSwithchedOn", location);
    
}
// call the function to switch on the bulb
switchOnBulb("Living Room");