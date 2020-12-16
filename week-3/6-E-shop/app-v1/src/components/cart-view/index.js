import React from 'react';

const CartView = ({ value: cart }) => {

    const renderCartItems = () => {
        let keys = Object.keys(cart)
        return keys.map((key => {
            let cartLine = cart[key]
            let { item, qty } = cartLine
            return (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                    <td>{qty}</td>
                    <td>&#8377;{qty * item.price}</td>
                </tr>
            )
        }))
    }

    return (
        <div className="card">
            <div className="card-header">item(s) in cart</div>
            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderCartItems()}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CartView;