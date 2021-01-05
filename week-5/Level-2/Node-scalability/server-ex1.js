const fs = require('fs')
const express = require('express')
const app = express()
const pid = process.pid;

app.get("/io", (req, res) => {
    console.log(`${pid} handling request`)
    fs.readFile('./data.txt', (err, data) => {
        if (err)
            res.status(500).json({ message: err.message })
        res.send(data)
    })
})

app.get("/big-computation", (req, res) => {
    console.log(`${pid} handling request`)
    // simulate route processing delay
    for (let i = 0; i < 2e9; i++) { }
    res.send(`Process : ${pid} says hi`)
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server: process ${pid} is listening on ${port}`)
})
