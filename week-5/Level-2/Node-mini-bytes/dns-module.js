

const dns = require('dns');

dns.lookup('nodejs.org', (err, address, family) => {
    console.log('address: %j family: IPv%s', address, family);
});