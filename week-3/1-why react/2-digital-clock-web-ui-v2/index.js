console.log("-index.js-")



//--------------------------------------------------------
// clock class
//--------------------------------------------------------

function Clock(props) {
    // let timeZone = props.timeZone;
    // or
    let { timeZone } = props // de-structuring
    return `
    <div class="card">
        <div class="card-header">${timeZone}</div>
        <div class="card-body">
            <span class="badge badge-dark">${new Date().toLocaleTimeString('en', { timeZone })}</span>
        </div>
    </div>
    `
}

const clock1 = document.getElementById('clock-1')
const clock2 = document.getElementById('clock-2')
const clock3 = document.getElementById('clock-3')


setInterval(() => {
    clock1.innerHTML=Clock({ timeZone:'America/New_york'})
    clock2.innerHTML=Clock({ timeZone:'Asia/Dubai'})
    clock3.innerHTML=Clock({ timeZone:'Asia/Kolkata'})
}, 1000)

