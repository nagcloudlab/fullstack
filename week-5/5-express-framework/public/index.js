
console.log("-index.js-")


//--------------------------------------
// using DOM api
//--------------------------------------

const todosBtn = document.querySelector('.btn-dark')

let todos = []

todosBtn.addEventListener('click', e => {

    const url = "http://localhost:3000/api/todos"
    fetch(url, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(result => {
            todos = result
            renderTodos()
        })

})


document.getElementById('new-todo')
    .addEventListener('keyup', e => {
        if (e.which !== 13)
            return
        let title = e.target.value

        const url = "http://localhost:3000/api/todos"
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title })
        })
            .then(response => response.json())
            .then(todo => {
                todos = [todo, ...todos]
                renderTodos()
                e.target.value = ''
            })


    })


function renderTodos() {
    console.log(todos)
    document.getElementById('todos')
        .innerHTML = todos.map(todo => {
            return `
        <li class="list-group-item">
            <span>${todo.id}</span>
            <span>${todo.title}</span>
            <span>${todo.completed}</span>
        </li>
        `
        }).join(" ")
}