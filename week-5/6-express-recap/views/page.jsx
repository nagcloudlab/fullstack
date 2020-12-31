import React from 'react';

function page(props) {
    let { time } = props;
    return (
        <div>
            <h1>{time}</h1>
        </div>
    );
}

export default page;