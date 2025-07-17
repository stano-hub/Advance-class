const EventEmitter = require('events');

// create an instance of the events
const orderEmitter = new EventEmitter();

orderEmitter.on("orderPlaced", (orderId) => {
    console.log(`order with ID #${orderId} has been placed successfully.`);
    
});

// create a listener for sending a confirmation 
orderEmitter.on("orderPlaced", (orderId) => {
    console.log(`Sending confirmation for order ID #${orderId}...`);
});

// listener that checks whether the order is in stock
orderEmitter.on("orderPlaced", (orderId) => {
    console.log(`Checking stock for order ID #${orderId}...`);
    
});

// generate a confirmation when you have confirmed the availability of the order
orderEmitter.on("orderPlaced", (orderId) => {
    console.log(`The item for order ID #${orderId} is in stock .`);
    
});

// function to place an order
function placeOrder(orderId) {
    console.log(`\n --- new order placed ---`);
    // emit the event
    orderEmitter.emit("orderPlaced", orderId);
    
}
// invoke the function to place an order
placeOrder(12345);