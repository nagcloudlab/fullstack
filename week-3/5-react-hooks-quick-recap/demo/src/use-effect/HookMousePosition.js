
import React, { useState, useEffect } from 'react';

const HookMousePosition = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 })

    const changeMousePosition = e => {
        setPosition({ x: e.clientX, y: e.clientY })
    }

    useEffect(() => {
        window.addEventListener('mousemove', changeMousePosition)
        return () => {
            window.removeEventListener('mousemove', changeMousePosition)
        }
    }, [])

    return (
        <div className="card card-body">
            <div className="">
                X : {position.x}, Y : {position.y}
            </div>
        </div>
    );
};

export default HookMousePosition;