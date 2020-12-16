import React, { useEffect, useState } from 'react';
import Item from '../item';

import axios from 'axios'

const ItemList = () => {

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
                <div key={dataItem.id} className="">
                    <Item value={dataItem} />
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