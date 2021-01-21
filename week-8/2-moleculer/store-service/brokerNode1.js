


const { ServiceBroker } = require("moleculer");
const HTTPServer = require("moleculer-web");

const brokerNode1 = new ServiceBroker({
    transporter: 'nats://localhost:4222'
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
brokerNode1.repl();