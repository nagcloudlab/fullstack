

//--------------------------------------------
// using DOM api
//--------------------------------------------
/**
 *  how to work with DOM api?
 *  step-1 : query for DOM elememnts
 *  step-2 : bind event listener(s)
 */
//--------------------------------------------

//  const alertBox=document.getElementsByClassName('alert')[0]
// or
const alertBox = document.querySelector('.alert')
const greetBtn = document.querySelector('#greet-btn')
const showBtn = document.querySelector('.btn-primary')
const hideBtn = document.querySelector('.btn-danger')

greetBtn.addEventListener('click', event => {
    alertBox.innerText = `good morning => ${new Date().toLocaleTimeString('en', { timeZone: 'America/New_york' })}`
})

hideBtn.addEventListener('click', e => {
    alertBox.style.display = 'none'
})
showBtn.addEventListener('click', e => {
    alertBox.style.display = 'block'
})

//------------------------------------------------------------

//--------------------------------------------
// using DOM api + Timer Api
//--------------------------------------------

const images = [
    "images/0.jpeg",
    "images/1.jpeg",
    "images/2.jpeg",
    "images/3.jpeg",
    "images/4.jpeg",
]

const startBtn = document.getElementById('start-btn')
const stopBtn = document.getElementById('stop-btn')
const imgEle = document.getElementById('po');

stopBtn.disabled = true
startBtn.addEventListener('click', e => {

    let i = 0;
    let interval = setInterval(e => {
        i++
        const newImagePath = images[i];
        imgEle.src = newImagePath
        if (i === images.length - 1)
            i = -1
    }, 1000)
    startBtn.disabled = true
    stopBtn.disabled = false

    stopBtn.addEventListener('click', e => {
        clearInterval(interval)
        startBtn.disabled = false
        stopBtn.disabled = true
    })

})



//--------------------------------------------
// using DOM api + Timer Api
//--------------------------------------------

const timeNowEle = document.getElementById('time-now')

setInterval(() => {
    let time = new Date().toLocaleTimeString('en', { timeZone: 'America/New_york' })
    timeNowEle.innerText = time
}, 1000)