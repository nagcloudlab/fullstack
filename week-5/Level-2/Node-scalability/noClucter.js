const express = require('express')
const app = express()
const pid = process.pid;
const path = require('path')

const { spawn } = require('child_process')

app.get("/", (req, res) => {
    console.log(`${pid} handling request`)
    // simulate route processing delay
    for (let i = 0; i < 2e6; i++) { } // blocking
    res.send(`Server ${pid} says hi`)
})

app.get("/big-computation", (req, res) => {
    // create child-process
    // console.log(path.resolve('./big-computation.js'))
    console.log(__filename)
    const child = spawn(process.execPath, [path.resolve('./big-computation.js')])
    child.stdout.on('data', data => {
        res.send(data)
    })
})

app.get("/kill", (req, res) => {
    process.exit(0)
})

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server: process ${pid} is listening on ${port}`)
})
