// DNS is the convertion of domain name to IP address
// import the dns module
const dns = require('dns');

// look up a domain name
dns.lookup('finworldconsults.com', (err, value) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(value);
});

// the resolve method returns an array of all IPs
dns.resolve('finworldconsults.com.ng', (err, value) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(value);
});

// returns the mail exchange record for that domain
dns.resolve('finworldconsults.com.ng', 'MX', (err, value) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(value);
});

// the reverse function shows the textual repretensation shows the reverse 
// record of an ip address
dns.reverse('8.8.8.8', (err, value) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(value);
});