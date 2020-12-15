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

    const renderItems = () => {
        return items.map((item) => {
            return (
                <div key={item.id} className="list-group-item">
                    <Item value={item} />
                </div>
            )
        })
    }

    return (
        <div>
            <div className="list-group">
                {renderItems()}
            </div>
        </div>
    );
};

export default ItemList;