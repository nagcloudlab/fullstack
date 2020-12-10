

import  React from 'react'

function Greeting(props) {
    console.log("Greeting :: render()")
    let { message } = props;
    return (
        <div className="alert alert-info">
            <p>{message}</p>
            <hr />
        </div>
    )
}

export default Greeting;