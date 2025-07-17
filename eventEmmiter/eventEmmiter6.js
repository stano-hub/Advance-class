const EventEmitter = require('events');

// create the payment emitter
const paymentEmitter = new EventEmitter();

// listen for payment process
paymentEmitter.on('startPayment', () => {
  console.log('Step 1: Payment started...');
});

paymentEmitter.on('startPayment', () => {
  console.log('Step 2: Verifying card...');
});

paymentEmitter.on('startPayment', () => {
  console.log('Step 3: Processing payment...');
});

paymentEmitter.on('startPayment', () => {
  console.log('Step 4: Payment complete! Welcome to Netflix 🎬');
});

// function to simulate payment
function makePayment() {
  console.log('--- Starting Netflix Payment ---');
  paymentEmitter.emit('startPayment');
}

makePayment();
