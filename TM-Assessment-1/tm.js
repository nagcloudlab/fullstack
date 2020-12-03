
const lodash = require('lodash')
const moment = require('moment')
const Task = require('./model/Task')


// use cases 

// data structure ( list | map )
const tasks = []

function addNewTask(text) {
    const newTask = new Task(text)
    tasks.push(newTask)
    return newTask;
}

function editTask() {
    //...
}

function viewTasks() {
}

function searchTasks() {
}


module.exports = {
    addNewTask
}