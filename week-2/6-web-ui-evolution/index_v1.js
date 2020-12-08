

//------------------------------------------------
// using DOM api
//-------------------------------------------------

const messageBox = document.querySelector('.alert')
const greetBtn = document.querySelector('.btn-primary')
const hideBtn = document.querySelector('.btn-danger')
const showBtn = document.querySelector('.btn-success')

greetBtn.addEventListener('click', e => {
    messageBox.innerHTML = "good morning"
})
hideBtn.addEventListener('click', e => {
    messageBox.style.display = 'none'
})
showBtn.addEventListener('click', e => {
    messageBox.style.display = ''
})



//------------------------------------------------
// using DOM api + Timer api
//-------------------------------------------------

setInterval(() => {
    document.getElementById('timeEle')
        .innerHTML = new Date().toLocaleTimeString('en', { timeZone: 'America/New_york' })
}, 1000)



//------------------------------------------------
// using DOM api + fetch api
//-------------------------------------------------

document.getElementById('fetch-btn')
    .addEventListener('click', e => {
        const url = "https://jsonplaceholder.typicode.com/posts?_limit=10"
        fetch(url)
            .then(response => response.json())
            .then(posts => {
                document.getElementById('posts').innerHTML = posts.map(post => {
                    return `
                        <div class="list-group-item">${post.title}</div>
                        `
                }).join(" ")
            })
    })

//------------------------------------------------------    