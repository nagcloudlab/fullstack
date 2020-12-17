import React, { useEffect, useState } from 'react';
import Item from '../item';

import * as api from '../../api'

import { useSelector,useDispatch } from 'react-redux'

const ItemList = () => {

    const items = useSelector(state => state.items)
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(api.getItems())
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