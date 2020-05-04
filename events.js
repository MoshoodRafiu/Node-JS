// import the events module
const events = require('events');

let usersLoggedIn = 0;

// this creates a new object from the events module
// It enables us to send event messages
const eventEmitter = new events.EventEmitter();

// Add an event listener "On userLogin"
eventEmitter.on('userLogin', () => {
    usersLoggedIn += 1;
    console.log(`There are ${usersLoggedIn} users logged in`);
})

// the emit function calls the events, showing a user has 
// logged in successfully
eventEmitter.emit('userLogin');