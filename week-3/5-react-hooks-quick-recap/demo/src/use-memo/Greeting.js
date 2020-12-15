

import React from 'react';

const Greeting = ({ message }) => {
    console.log("Greeting :: render()")
    return (
        <div className="alert alert-info">
            {message}
        </div>
    );
};

// export default Greeting;
export default React.memo(Greeting)