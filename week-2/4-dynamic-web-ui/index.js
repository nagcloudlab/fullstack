
document.addEventListener('DOMContentLoaded', e => {



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
    const countList = document.getElementById('tasks-count-list')
    const countInp = document.getElementById('tasks-count-inp')
    const msgBox = document.getElementById('msg-box');

    topFiveTasksBtn.addEventListener('click', e => {
        countList.value = 5
        countInp.value = 5
        loadTasksWithAxios(5)
    })
    countList.addEventListener('change', e => {
        let count = e.target.value;
        countInp.value = count
        loadTasksWithAxios(count)
    })
    countInp.addEventListener('blur', e => {
        let count = e.target.value;
        let list = [5, 10, 50, 100, 200]
        if (list.includes(Number.parseInt(count))) {
            countList.value = count
        } else {
            countList.value = '#'
        }
        loadTasksWithAxios(count)
    })

    // XHR api
    function loadTasksWithXHRApi(count) {
        const apiUrl = `https://jsonplaceholder.typicode.com/todos?_limit=${count}`
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
                renderTasks(tasks)
            }
        }
    }

    // fetch api
    function loadTasksWithFetchApi(count) {
        const apiUrl = `https://jsonplaceholder.typicode.com/todos?_limit=${count}`
        const promise = fetch(apiUrl, {
            method: 'GET'
        })
        promise
            .then(response => response.json())
            .then(tasks => renderTasks(tasks))
    }


    function loadTasksWithAxios(count) {
        const apiUrl = `https://jsonplaceholder.typicode.com/todos?_limit=${count}`
        axios.get(apiUrl)
            .then(response => response.data)
            .then(tasks => renderTasks(tasks))
    }


    function renderTasks(tasks) {
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

})