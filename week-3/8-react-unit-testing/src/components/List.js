import React from 'react';
import ListItem from './ListItem';

const List = ({ title, items = [] }) => {
    const renderItems = () => {
        if (items.length === 0) {
            return (<div>Ni items in lits</div>)
        }
        else {
            return items.map(item => {
                return (<ListItem key={item} value={item} />)
            })
        }
    }
    return (
        <div className="card">
            <div className="card-header">{title}</div>
            <div className="card-body">
                <ul>
                    {renderItems()}
                </ul>
            </div>
        </div>
    );
};

export default List; 