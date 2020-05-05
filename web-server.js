// import the http module
const http = require('http');

// create a server, it takes 2 arguments which are
// r equest made to the server and result the server sends back
const server = http.createServer(
    (request, result) => {
        const name = request.url.slice(1);
        // get result back to client 200 is status code 
        // the Content-Type tells the browser the request is html
        result.writeHead(200, { 'Content-Type': 'text/html' });
        // send the html content
        result.end(`<h1>Hello ${name}!</h1>`);
    }
);

// set a port to listen on
server.listen(8080, 'localhost');