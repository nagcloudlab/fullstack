
import React, { useState, useRef, useCallback } from 'react';
import Item from './Item';

const TodoApp = () => {

    const [todos, setTodos] = useState([])

    //const todoField = useRef(null) // it will create single reference across multiple re-renders

    const addNewTodo = e => {
        if (e.which === 13) {
            let title = e.target.value
            setTodos(todos.concat({ id: todos.length + 1, title }))
            e.target.value = ''
            //todoField.current.value = ''
        }
    }

    const editTodo = useCallback((id) => {
        console.log("todo " + id + " => in editing mode")
    });

    return (
        <div className="card card-body">
            <div className="row">
                <div className="">
                    <input placeholder="New Todo"
                        onKeyUp={e => addNewTodo(e)} />
                </div>
            </div>
            <hr />
            <div>
                <ul className="list-group">
                    {
                        todos.map(item => {
                            return <Item
                                onEdit={editTodo}
                                key={item.id}
                                value={item} />
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default TodoApp;