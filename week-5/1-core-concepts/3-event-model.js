

/**
 *
 *
 *  Note : All objects that emit events are instances of the EventEmitter class.
 *
 */


const EventEmitter = require('events').EventEmitter

//-------------------------------------------------------------------------------
// const ee = new EventEmitter();


// ee.on('some-event', (err, data) => {
//     if (err) {
//         console.log(err.message)
//         return
//     }
//     console.log('handling some-event : ' + data)
// })
// ee.on('other-event', (err, data) => {
//     if (err) {
//         console.log(err.message)
//         return
//     }
//     console.log('handling other-event : ' + data)
// })



// ee.emit('some-event', null, 'Hello')
// // ee.emit('some-event', new Error('oops'), null)

// ee.emit('other-event', null, 'Hi')

//-------------------------------------------------------------------------------


//--------------------------------------------------------------------------------
// Door
//--------------------------------------------------------------------------------


class Door extends EventEmitter {
    open() {
        console.log("door opened")
        this.emit('open', { doorNumber: 1, floor: 2 })
    }
    close() {
        console.log("door closed")
        this.emit('close', { doorNumber: 1, floor: 2 })
    }
}

const door = new Door()

//--------------------------------------------------------------------------------
// Light
//--------------------------------------------------------------------------------

door.on('open', (event) => {
    console.log('light on ' + event.doorNumber + " - " + event.floor)
})

door.on('close', (event) => {
    console.log('light off ' + event.doorNumber + " - " + event.floor)
})

//--------------------------------------------------------------------------------
// Fan
//--------------------------------------------------------------------------------

door.on('open', (event) => {
    console.log('fan on ' + event.doorNumber + " - " + event.floor)

})

door.on('close', (event) => {
    console.log('fan off ' + event.doorNumber + " - " + event.floor)
})


//--------------------------------------------------------------------------------

setTimeout(() => {
    door.open()
    setTimeout(() => {
        door.close()
    }, 2000)
}, 2000)