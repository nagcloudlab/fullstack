
import React, { useState } from 'react'

const HookList = () => {
    const [list, setList] = useState([])
    const addItem = () => {
        let item = { id: list.length + 1, value: Math.floor(Math.random() * 100) }
        // list.push(item)
        // setList(list)

        //
        setList(list.concat(item))
    }
    return (
        <div className="card card-body">
            <button onClick={addItem} className="btn btn-lg btn-dark">
                Add Item
            </button>
            <br />
            <br />
            <ul className="list-group">
                {
                    list.map(item => {
                        return (
                            <li className="list-group-item" key={item.id}>{item.value}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default HookList;