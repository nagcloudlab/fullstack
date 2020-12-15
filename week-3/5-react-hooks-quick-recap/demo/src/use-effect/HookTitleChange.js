import React, { useState, useEffect } from 'react';

const HookTitleChange = () => {
    let [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `count - ${count}`
    }, [count])
    const increment = () => {
        setCount(count + 1)
    }
    return (
        <div className="card card-body">
            <div className="">
                <button className="btn" onClick={increment}>
                    do count - {count}
                </button>
            </div>
        </div>
    );
};

export default HookTitleChange;