import React from 'react';
// import './index.css'

import styles from './index.module.css'

import { useSelector } from 'react-redux'
const CartBadge = () => {
    const cart = useSelector(state => state.cart) // subscribed with redux store
    return (
        <div className={styles.bg}>
            <i className="fa fa-shopping-cart"></i>&nbsp;
            <span>{Object.keys(cart).length}</span> item(s) in cart
        </div>
    );
};

export default CartBadge;