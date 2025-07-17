const EventEmitter = require('events');

// create the event emitter
const loginEmitter = new EventEmitter();

// create a counter for login attempts
let attempts = 0;

// listen for login attempts
loginEmitter.on('loginAttempt', () => {
  attempts++;
  console.log(`Login attempt #${attempts}`);

  if (attempts < 3) {
    // try logging in again
    loginEmitter.emit('loginAttempt');
  } else {
    // too many attempts, notify admin
    loginEmitter.emit('notifyAdmin');
  }
});

// listener for notifying admin
loginEmitter.on('notifyAdmin', () => {
  console.log('❗ Admin has been notified of suspicious login activity.');
});

// function to start login
function startLogin() {
  console.log('--- Simulating Login ---');
  loginEmitter.emit('loginAttempt');
}

startLogin();
