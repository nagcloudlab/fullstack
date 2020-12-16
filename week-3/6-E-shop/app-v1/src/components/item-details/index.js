
import React from 'react';

import { useParams } from 'react-router-dom'

const ItemDetails = ({ history, location, match }) => {

    const params = useParams();
    const { itemId } = params

    // console.log(match)

    return (
        <div>
            item details of - {itemId}
        </div>
    );
};

export default ItemDetails;