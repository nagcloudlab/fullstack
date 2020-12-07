


document.getElementById('long-script-btn')
    .addEventListener('click', e => {
        const w = new Worker("long-running-script.js");
        w.onmessage = function (m) {
            document.getElementById('result').innerHTML = m.data.value
            w.terminate();
        }
    })


document.getElementById('greet-me-btn')
    .addEventListener('click', e => {
        console.log("greet-me-btn handler")
        document.getElementById('greet-message').innerHTML = "hello"
    })    