// Error Hndling
const dns = require('dns');
// returns the mail exchange record for that domain
dns.lookup('finworldconsultsr.com.ng', 'MX', (err, value) => {
    if (err) {
        // this line of code prevents the whole error from being displayed
        // i.e handling the error
        console.log("Error Looking Up Domain Name");
        return;
    }
    console.log(value);
});

// Note: it is better to check for errors first before success