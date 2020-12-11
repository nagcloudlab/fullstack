

// Trainer - Nag

const store = {
    listeners: [],
    subscribe: function (listener) {
        this.listeners.push(listener)
        return () => {
            // unsubscribe..
        }
    },
    state: {
        channels: [
            "javascript",
            "UI",
            "react",
            "react-native"
        ],
        messages: {
            "javascript": [
                "data types",
                "FP",
                "OOP",
                "ES6"
            ],
            "UI": [
                "HTML",
                "CSS",
                "browser apis"
            ],
            "react":[
                
            ]
        }
    },

    getState: function () {
        return this.state;
    }

}


let i = 0;
setInterval(() => {
    let channel = "channel-" + i
    const state = store.getState();
    state.channels.push(channel)
    store.listeners.forEach(listener => {
        listener(); // notification
    })
    i++
}, 10 * 1000)




let j = 0;
setInterval(() => {
    let message = "message-" + j
    const state = store.getState();
    state.messages['react'].push(message)
    store.listeners.forEach(listener => {
        listener(); // notification
    })
    j++
}, 8 * 1000)

export default store;