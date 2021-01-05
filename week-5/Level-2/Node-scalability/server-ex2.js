

const cluster = require('cluster')
const os = require('os')
const numCPUs = os.cpus().length

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        cluster.fork();
    });

} else {

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

    // spawn to child_process
    app.get("/big-computation", (req, res) => {
        console.log(`${pid} handling request`)
        // simulate route processing delay
        for (let i = 0; i < 2e10; i++) { }
        res.send(`Process : ${pid} says hi`)
    })

    app.get("/kill", (req, res) => {
        process.exit(0)
    })

    const port = process.env.PORT || 8181;
    app.listen(port, () => {
        console.log(`Worker process ${pid} is running`)
    })

}

