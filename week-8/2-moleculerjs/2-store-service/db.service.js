
module.exports = {
    name: 'db',
    actions: {
        getProduct(ctx) {
            const productId = ctx.params.id;
            return { productId, name: 'pomo', price: 3 }
        }
    },
    created() {

    },
    async started() {
        // Fired when broker starts this service (in `broker.start()`)
    },
    async stopped() {
        // Fired when broker stops this service (in `broker.stop()`)
    }
}
