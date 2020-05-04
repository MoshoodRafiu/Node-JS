// import the net module
const net = require('net');

// connect to server
const client = net.createConnection({
    port: 8080
});

// set up an event listener for any message
client.on('data', data => {
    console.log(`Message received from server: ${data}`);
});