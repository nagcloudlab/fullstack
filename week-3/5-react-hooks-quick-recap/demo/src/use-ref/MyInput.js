import React, { useRef } from 'react';

const MyInput = () => {

    const inputEl = useRef('')
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current.focus();
    };

    return (
        <div className="card card-body">
            <input ref={inputEl} />
            <button onClick={onButtonClick}>focus</button>
        </div>
    );
};

export default MyInput;