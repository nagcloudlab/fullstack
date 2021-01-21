



module.exports = {
    name: 'logger',
    settings: {},
    actions: {},
    events: {
        'some.event'(ctx) {
            this.logger.info("some-event handled")
        }
    },
    methods: {},

    created() {
        // Fired when the service instance created (with `broker.loadService` or `broker.createService`)
    },
    


}