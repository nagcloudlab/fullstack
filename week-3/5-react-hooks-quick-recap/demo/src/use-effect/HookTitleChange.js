import React, { useState, useEffect } from 'react';

const HookTitleChange = () => {

    let [count, setCount] = useState(0)
    let [name, setName] = useState('')

    useEffect(() => {
        console.log("useEffect")
        document.title = `count - ${count}`
    }, [count])

    const increment = () => {
        setCount(count + 1)
    }

    const changeName = () => {
        setName("Nag")
    }

    return (
        <div className="card card-body">
            <div className="">
                <button className="btn btn-lg btn-primary" onClick={increment}>
                    do count - {count}
                </button>
                <button className="btn btn-lg btn-primary" onClick={changeName}>
                    say name - {name}
                </button>
            </div>
        </div>
    );
};

export default HookTitleChange;