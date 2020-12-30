
const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser')



let todos = [
    { id: 1, title: 'item-1', completed: false, type: 'official' },
    { id: 2, title: 'item-2', completed: true, type: 'personal' },
    { id: 3, title: 'item-3', completed: true, type: 'official' },
    { id: 4, title: 'item-4', completed: true, type: 'personal' }
]


router.route("/")
    .get((req, res) => {
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
    .post(bodyParser.json(), (req, res, next) => {
        let todo = req.body;
        todo.id = todos.length + 1
        todo.completed = false
        todos.unshift(todo)
        res.status(201).json(todo)
    })




router.route('/:todoId')
    .all((req, res, next) => {
        const todoId = req.params.todoId;
        req.todoId = Number.parseInt(todoId);
    })
    .get((req, res) => {
        let todo = todos.find(todo => todo.id === req.todoId)
        if (todo) {
            res.json(todo) // application/json
        } else
            res.status(404).json({ message: 'requested todo not found' })
    })
    .patch(bodyParser.json(), (req, res, next) => {
        let details = req.body;
        let todo = todos.find(todo => todo.id === req.todoId)
        todo.title = details.title ? details.title : todo.title
        todo.completed = details.completed ? details.completed : todo.completed
        res.status(200).json(todo)
    })
    .delete((req, res, next) => {
        let todoId = req.params.todoId // path params
        console.log(todoId)
        todos = todos.filter(todo => todo.id !== req.todoId)
        console.log(todos)
        res.status(200).json({ message: 'deleted' })
    })




module.exports = router

