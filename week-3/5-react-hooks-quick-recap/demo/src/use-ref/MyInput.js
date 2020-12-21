import React, { useRef } from 'react';

const MyInput = () => {

    const inputEl = useRef('')
    const intervalRef = useRef(null)
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current.focus();
    };

    useEffect(() => {
        intervalRef.current = setInterval(() => { })
    })


    return (
        <div className="card card-body">
            <input ref={inputEl} />
            <button onClick={onButtonClick}>focus</button>
            <button onClick={e=>clearInterval(intervalRef.current)}>stop interval</button>
        </div>
    );
};

export default MyInput;