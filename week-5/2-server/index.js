
const http = require('http')
const fs = require('fs')
const httpServer = http.createServer() // EventEmitter

httpServer.on('request', (req, res) => {

    console.log(`${req.method} : ${req.url}`)

    //----------------------------------------------------------------
    //..
    // res.writeHead(200, { 'Content-Type': 'text/plain' })
    // res.write("Hello World")
    // res.end()

    //----------------------------------------------------------------

    // Non Blocking IO
    // fs.readFile('./greet.txt', (err, data) => {
    //     if (err) {
    //         res.writeHead(500, { 'Content-Type': 'text/plain' })
    //         res.end(err.message)
    //     }
    //     res.writeHead(200, { 'Content-Type': 'text/plain' })
    //     res.end(data)
    // })

    //----------------------------------------------------------------
    // without backpressure leads to too much memory or crash

    // fs.readFile('./file', (err, data) => {
    //     if (err) {
    //         res.writeHead(500, { 'Content-Type': 'text/plain' })
    //         res.end(err.message)
    //     }
    //     res.writeHead(200, { 'Content-Type': 'application/octet-stream' })
    //     res.end(data)
    // })
    //----------------------------------------------------------------

    // with backpressure  with Node.ks data/event/async streams

    const readStream = fs.createReadStream('./file') // EventEmitter
    readStream.pipe(res)

    //----------------------------------------------------------------

})


httpServer.listen(8080, () => {
    console.log("listening on port 8080 at localhost with pid " + process.pid)
})