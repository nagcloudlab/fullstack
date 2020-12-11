

// store ==> data / state


// store= state container , where complete UI state exist

const store = {
    listeners: [],
    subscribe: function (listener) {
        this.listeners.push(listener)
        let unsubscribe = () => {
            let idx = this.listeners.findIndex(l => l === listener)
            this.listeners.splice(idx, 1)
        }
        return unsubscribe
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
            "react": [

            ]
        }
    },

    getState: function () {
        return this.state;
    }

}


// N/W calls using XHR api , fetch api , web-sockets

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