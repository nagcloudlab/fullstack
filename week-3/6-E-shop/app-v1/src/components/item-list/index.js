import React, { useEffect, useState } from 'react';
import Item from '../item';

import axios from 'axios'

const ItemList = ({ onBuy }) => {

    const [items, setItems] = useState([])


    useEffect(() => {
        const apiUrl = 'http://localhost:8080/api/items'
        axios
            .get(apiUrl)
            .then(response => response.data)
            .then(items => {
                setItems(items)
            })
    }, [])

    const renderItems = () => {
        return items.map((dataItem) => {
            return (
                <div key={dataItem.id} className="list-group-item">
                    <Item value={dataItem} onBuy={onBuy} />
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