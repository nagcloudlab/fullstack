import React, { useState } from 'react';
import Item from '../item';

const ItemList = () => {

    const [items] = useState([
        {
            id: 1,
            name: 'Laptop',
            price: 145000,
            description: 'MAC pro 15 inch',
            can_buy: true,
            img_path: 'images/Laptop.png',
        },
        {
            id: 2,
            name: 'Mobile',
            price: 15000,
            description: 'iphone',
            can_buy: true,
            img_path: 'images/Mobile.png',
        }
    ])

    const [cart, setCart] = useState([])

    const addToCart = item => {
        setCart([item, ...cart])
    }

    const renderItems = () => {
        return items.map((dataItem) => {
            return (
                <div key={dataItem.id} className="list-group-item">
                    <Item value={dataItem} onBuy={addToCart} />
                </div>
            )
        })
    }

    return (
        <div>
            <hr />
            <i className="fa fa-shopping-cart"></i>&nbsp;
            <span>{cart.length}</span> item(s) in cart
            <hr />
            <div className="list-group">
                {renderItems()}
            </div>
        </div>
    );
};

export default ItemList;