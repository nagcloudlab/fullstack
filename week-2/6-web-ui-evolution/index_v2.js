

//------------------------------------------------
// using DOM api
//-------------------------------------------------

const box = $('.alert')
const greetBtn = $('.btn-primary')
const showBtn = $('.btn-success')
const hideBtn = $('.btn-danger')

greetBtn.click(e => {
    box.text("good morning")
})
hideBtn.click(e => {
    box.slideUp(3000)
})
showBtn.click(e => {
    box.slideDown(3000)
})


//------------------------------------------------
// using DOM api + Timer api
//-------------------------------------------------

setInterval(() => {
    $('#timeEle').text(new Date().toLocaleTimeString('en', { timeZone: 'America/New_york' }))
}, 1000)


//------------------------------------------------
// using DOM api + fetch api
//-------------------------------------------------

document.getElementById('fetch-btn')
    .addEventListener('click', e => {
        const url = "https://jsonplaceholder.typicode.com/posts?_limit=10"
        $.getJSON(url, response => {
            console.log(response)
        })
    })

//------------------------------------------------------    