const cluster = require('cluster')
const os = require('os')
const numCPUs = os.cpus().length

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    console.log(`forking ${numCPUs} CPUs`)

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        cluster.fork();
    });

} else {

    const express = require('express')
    const app = express()
    const pid = process.pid;

    app.get("/", (req, res) => {
        console.log(`${pid} handling request`)
        // simulate route processing delay
        for (let i = 0; i < 2e3; i++) { }
        res.send(`Server : process ${pid} says hi`)
    })


    app.get("/kill", (req, res) => {
        process.exit(0)
    })

    const port = process.env.PORT || 8080;
    app.listen(port, () => {
        console.log(`Server: process ${pid} is listening on ${port}`)
    })


}

