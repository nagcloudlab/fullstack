

module.exports = {
    name: 'products',
    dependencies: ['db'],
    actions: {
        async listProduct(ctx) {
            ctx.emit('some.event', {})
            return await ctx.call('db.getProduct', { id: ctx.params.id })
        },
        //   ==> count , 5min ==> count , time to execute , 
        listProducts: {
            fallback: (ctx, err) => "fallback response",
            cache: true,
            handler(ctx) {
                this.logger.info("listProducts Handler called")
                return {
                    // node: ctx.broker.nodeID,
                    products: [
                        { name: "Apples", price: 5 },
                        { name: "Oranges", price: 3 },
                        { name: "Bananas", price: 2 }
                    ]
                }
            }
        }
    }
}