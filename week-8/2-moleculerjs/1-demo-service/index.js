
const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker()


broker.createService({
    name: 'greeting',
    actions: {
        hello(ctx) {
            return `Hello ${ctx.params.name}, Welcome`
        }
    }
})


// broker.start()
//     .then(() => {
//         broker.call('greeting.hello')
//             .then(response => {
//                 console.log(response)
//             })
//     })

// or

// broker.start()
//     .then(async () => {
//         const response = await broker.call("greeting.hello")
//         console.log(response)
//     })

//---------------------------------------------------------

broker.start();
broker.repl()

//---------------------------------------------------------