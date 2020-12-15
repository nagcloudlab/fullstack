

import React, { useState } from 'react';

const HookCounter = () => {
    let [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
        // for (let i = 0; i < 5; i++) {
        //     setCount(prevCount => prevCount + 1) 
        // }
    }
    return (
        <div className="card card-body">
            <div className="card-panel blue-grey darken-1">
                <button onClick={increment} className="btn btn-lg btn-primary">
                    increment
                </button>
                <hr />
                <span className="badge badge-dark">{count}</span>
                <hr />
            </div>
        </div>
    );
};

export default HookCounter;