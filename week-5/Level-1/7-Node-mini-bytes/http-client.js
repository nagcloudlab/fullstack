
// fetch module

const fetch = require('node-fetch')
const url = 'http://localhost:8080/'
fetch(url)
    .then(response => response.text())
    .then(message => {
        console.log(message)
    })