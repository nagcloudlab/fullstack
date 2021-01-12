
import React from 'react';

import { useSelector } from 'react-redux'

// import './index.css'

import styles from './index.module.css'

const Alert = () => {

    const networkStatus = useSelector(state => state.networkStatus)
    const { message } = networkStatus

    const renderMessage = () => {

        if (message) {
            return (
                <div className={styles.bg}>
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