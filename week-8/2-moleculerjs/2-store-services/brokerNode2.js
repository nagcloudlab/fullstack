


const { ServiceBroker } = require("moleculer");


const brokerNode2 = new ServiceBroker({
    transporter: 'nats://localhost:4222',
    circuitBreaker: {
        enabled: true,
        threshold: 0.5,
        minRequestCount: 20,
        windowTime: 60, // in seconds
        halfOpenTime: 5 * 1000, // in milliseconds
        check: err => err && err.code >= 500
    },
    bulkhead: {
        enabled: true,
        concurrency: 3,
        maxQueueSize: 10,
    },
    cacher: "Memory"
});

// brokerNode2.createService({})
brokerNode2.loadService('./products.service.js')
brokerNode2.loadService('./db.service.js')
brokerNode2.loadService('./logger.service.js')


brokerNode2.start(); // 1. transport , 
brokerNode2.repl(); // for testing