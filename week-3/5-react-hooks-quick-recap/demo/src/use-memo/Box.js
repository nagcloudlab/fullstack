

import React, { useState } from 'react';
import Greeting from './Greeting'

const Box = () => {
    const [gmMessage, setGMMessage] = useState('gm')
    const [gnMessage, setGNMessage] = useState('gn')
    const [geMessage, setGEMessage] = useState('ge')
    return (
        <div>
            <hr />
            <button onClick={e => setGMMessage('GM')} className="btn btn-lg btn-primary">GM</button>
            <button onClick={e => setGNMessage('GN')} className="btn btn-lg btn-primary">GN</button>
            <button onClick={e => setGEMessage('GE')} className="btn btn-lg btn-primary">GE</button>
            <hr />
            <Greeting message={gmMessage} />
            <Greeting message={gnMessage} />
            <Greeting message={geMessage} />
        </div>
    );
};

export default Box;