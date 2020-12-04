

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




//--------------------------------------------
// using DOM api + XHR (XMLHTTPRequest) apis
//--------------------------------------------

const topFiveTasksBtn = document.getElementById('top-5-tasks-btn')
const msgBox = document.getElementById('msg-box');

topFiveTasksBtn.addEventListener('click', e => {

    const apiUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=5'
    const xhr = new XMLHttpRequest(); // api
    xhr.open('GET', apiUrl, true)
    xhr.send()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 2) {
            msgBox.innerText = "loading tasks"
        }
        if (xhr.readyState === 4) {
            msgBox.innerText = ""
            const jsonText = xhr.responseText;
            const tasks = JSON.parse(jsonText)

            const tableRows = tasks.map((task) => {
                return `
                <tr class="${task.completed ? 'bg-danger' : ''}">
                    <td>${task.id}</td>
                    <td>${task.title}</td>
                    <td>${task.completed ? 'completed' : 'pending'}</td>
                </tr>
                `
            })
            const str = tableRows.join('\n')
            document.getElementById('task-rows').innerHTML = str
        }
    }


})