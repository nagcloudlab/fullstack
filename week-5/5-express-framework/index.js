const path = require('path');
const express = require('express')
const bodyParser = require('body-parser')
const app = express();

/*
app.get('/', (req, res) => {

    //res.send("Hello World")

    // res.write("<h1>Hello World</h1>") // text/html
    // res.end();

    res.sendFile(path.join(__dirname, 'public', 'index.html'))

})

app.get('/css/bootstrap.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/css/bootstrap.css'))
})

app.get('/images/cts.png', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/images/cts.png'))
})

*/


app.use(express.static(path.join(__dirname, 'public')));


let todos = [
    { id: 1, title: 'item-1', completed: false, type: 'official' },
    { id: 2, title: 'item-2', completed: true, type: 'personal' },
    { id: 3, title: 'item-3', completed: true, type: 'official' },
    { id: 4, title: 'item-4', completed: true, type: 'personal' }
]



app.get('/api/todos', (req, res) => {
    //res.send(todos) // application/json
    let todoType = req.query.type
    let limit = req.query.limit
    let result = []
    if (todoType === 'official')
        result = todos.filter(todo => todo.type === 'official')
    else if (todoType === 'personal')
        result = todos.filter(todo => todo.type === 'personal')
    else
        result = todos

    res.json(result.slice(0, limit)) // application/json
})



app.get('/api/todos/:todoId', (req, res) => {
    const todoId = req.params.todoId;
    let todo = todos.find(todo => todo.id === Number.parseInt(todoId))
    if (todo) {
        res.json(todo) // application/json
    } else
        res.status(404).json({ message: 'requested todo not found' })
})



app.post("/api/todos", bodyParser.json(), (req, res, next) => {
    let todo = req.body;
    todo.id = todos.length + 1
    todo.completed = false
    todos.unshift(todo)
    res.status(201).json(todo)
})


// app.put("/api/todos/:todoId", bodyParser.json(), (req, res, next) => {
//     let todoId = req.params.todoId // path params
//     let details = req.body;
//     let todo = todos.find(todo => todo.id === Number.parseInt(todoId))
//     todo.title = details.title ? details.title : todo.title
//     todo.completed = details.completed ? details.completed : todo.completed
//     res.status(200).json(todo)
// })


app.patch("/api/todos/:todoId", bodyParser.json(), (req, res, next) => {
    let todoId = req.params.todoId // path params
    let details = req.body;
    let todo = todos.find(todo => todo.id === Number.parseInt(todoId))
    todo.title = details.title ? details.title : todo.title
    todo.completed = details.completed ? details.completed : todo.completed
    res.status(200).json(todo)
})


app.delete("/api/todos/:todoId", (req, res, next) => {
    let todoId = req.params.todoId // path params
    console.log(todoId)
    todos = todos.filter(todo => todo.id !== Number.parseInt(todoId))
    console.log(todos)
    res.status(200).json({ message: 'deleted' })
})


app.use((req, res, next) => {
    console.log("middleware-1")
    next()
})

app.use((req, res, next) => {
    console.log("middleware-2")
    next()
})

app.use("/req1", (req, res, next) => {
    console.log("middleware-3")
    res.send("response for req1")
})

app.use("/req2", (req, res, next) => {
    console.log("middleware-4")
    res.send("response for req2")
})



app.get("/path1", (req, res) => {
    console.log("path1 request processeed")
    res.redirect(301, "/path2") // Location: /path2  : same origin redicet
    // res.redirect("http://www.google.com") // : cross origin redicet
})

app.get("/path2", (req, res) => {
    console.log("path2 request processeed")
    res.send("path2 response")
})


app.get("/express.pdf", (req, res) => {
    res.sendFile(path.join(__dirname, "docs", 'all-levels express.pdf'))
})





app.listen(3000, () => {
    console.log('server listening on port 3000')
})