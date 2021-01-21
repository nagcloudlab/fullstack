


const { ServiceBroker } = require("moleculer");


const brokerNode2 = new ServiceBroker({
    transporter: 'nats://localhost:4222',
});


brokerNode2.createService({
    name: 'products',
    actions: {
        listProducts(ctx) {
            // ....
            return {
                node: brokerNode2.nodeID,
                products: [
                    { name: "Apples", price: 5 },
                    { name: "Oranges", price: 3 },
                    { name: "Bananas", price: 2 }
                ]
            }
        }
    }
})


brokerNode2.start();
brokerNode2.repl(); // for testing