import React from 'react';

const Item = ({ value: item, onEdit }) => {
    console.log("Item:render()")
    return (
        <li onDoubleClick={e => onEdit(item.id)} className="list-group-item">{item.title}</li>
    );
};

// export default Item;
export default React.memo(Item);