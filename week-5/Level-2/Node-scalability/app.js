
const express = require('express')
const app = express()
const pid = process.pid;

app.get("/", (req, res) => {
    console.log(`${pid} handling request`)
    res.send(`Server : process ${pid} says Hi`)
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server: process ${pid} is listening on ${port}`)
})

