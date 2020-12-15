import React, { useState, useEffect } from 'react';

const HookAutoCount = () => {

    const [count, setCount] = useState(0)


    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            <div className="card card-body">
                count : {count}
            </div>
        </div>
    );
};

export default HookAutoCount;