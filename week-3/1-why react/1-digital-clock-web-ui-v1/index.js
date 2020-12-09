console.log("-index.js-")


const clock1 = document.getElementById('clock-1')
const clock2 = document.getElementById('clock-2')
const clock3 = document.getElementById('clock-3')

setInterval(() => {
    clock1.innerHTML = `
        <div class="card">
            <div class="card-header">America/New_york</div>
            <div class="card-body">
                <span class="badge badge-dark">${new Date().toLocaleTimeString('en', { timeZone: 'America/New_york' })}</span>
            </div>
        </div>
    `
}, 1000)


setInterval(() => {
    clock2.innerHTML = `
        <div class="card">
            <div class="card-header">Asia/Dubai</div>
            <div class="card-body">
                <span class="badge badge-dark">${new Date().toLocaleTimeString('en', { timeZone: 'Asia/Dubai' })}</span>
            </div>
        </div>
    `
}, 1000)


setInterval(() => {
    clock3.innerHTML = `
        <div class="card">
            <div class="card-header">Asia/Kolkata</div>
            <div class="card-body">
                <span class="badge badge-dark">${new Date().toLocaleTimeString('en', { timeZone: 'Asia/Kolkata' })}</span>
            </div>
        </div>
    `
}, 1000)