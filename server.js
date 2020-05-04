// import the net module
const net = require('net');

// Creating a server
const server = net.createServer();
// craete an array to store all connceted clients
const connectedClients = [];
// telling the server what port to listen on
server.listen({
    host: 'localhost',
    port: 8080
})

// create an event to listen on "connection"

server.on('connection', client => {
    console.log(`Client Connected`);
    // send a message to the client
    client.write('Welcome to the server');
    // add the client to the connectedClients Array
    connectedClients.push(client);
});

// Send out currrent time every 2 seconds to all clients
setInterval(() => {
    const now = new Date().toISOString();
    // loop through all clients
    connectedClients.forEach(client => {
        console.log('information sent');
        client.write(now);
    });
}, 2000);