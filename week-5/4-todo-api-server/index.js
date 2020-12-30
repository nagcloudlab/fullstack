

const http = require('http')

const httpServer = http.createServer()


let todos = [
    { id: 1, title: 'item-1', completed: 'false' },
    { id: 2, title: 'item-2', completed: 'true' }
]

httpServer.on('request', (req, res) => {

    let httpMethod = req.method;
    let httpUrl = req.url

    if (httpMethod === 'GET' && httpUrl === "/api/todos") {
        const json = JSON.stringify(todos)
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write(json)
        res.end()
    }
    // expressApp.get("/api/todos", () => { })

    if (httpMethod === 'GET' && httpUrl === "/api/todos/1") {
        const json = JSON.stringify(todos.find(todo => todo.id === 1))
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write(json)
        res.end()
    }

})

httpServer.listen(3000, () => console.log("server up"))