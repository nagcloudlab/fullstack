


const { ServiceBroker } = require("moleculer");
const HTTPServer = require("moleculer-web");


const brokerNode1 = new ServiceBroker({

    transporter: 'nats://localhost:4222',
    logLevel: "debug",
    requestTimeout: 5 * 1000,

    metadata: {
        region: "us-east-1"
    },

    requestTimeout: 2 * 1000, // in milliseconds,

    circuitBreaker: {
        enabled: true,
        threshold: 0.5,
        minRequestCount: 20,
        windowTime: 60, // in seconds
        halfOpenTime: 5 * 1000, // in milliseconds
        check: err => err && err.code >= 500
    },

    retryPolicy: {
        enabled: true,
        retries: 5,
        delay: 100,
        maxDelay: 2000,
        factor: 2,
        check: err => err && !!err.retryable
    }

});

brokerNode1.createService({
    name: 'gateway',
    mixins: [HTTPServer],
    settings: {
        routes: [
            {
                aliases: {
                    "GET /products": "products.listProducts"
                }
            }
        ]
    }
})


brokerNode1.start();




