

let count = 0;

let dispSpan = document.getElementById('disp')

// dispSpan.innerText = Number.parseInt(localStorage.getItem('hit-count')) || 0
dispSpan.innerText = Number.parseInt(sessionStorage.getItem('hit-count')) || 0

document.getElementById('btn1')
    .addEventListener('click', e => {
        count++
        // localStorage.setItem('hit-count', count)
        sessionStorage.setItem('hit-count', count)
        dispSpan.innerText = count
    })