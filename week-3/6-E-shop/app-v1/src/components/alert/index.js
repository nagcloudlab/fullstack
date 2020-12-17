
import React from 'react';

import { useSelector } from 'react-redux'

const Alert = () => {

    const networkStatus = useSelector(state => state.networkStatus)
    const { message } = networkStatus

    const renderMessage = () => {

        if (message) {
            return (
                <div className="alert alert-info">
                    {message}
                </div>
            )
        }
    }
    return (
        <div>
            {renderMessage()}
        </div>
    );
};

export default Alert;