import React from 'react';
import { useHistory, useLocation } from "react-router-dom";

const CartView = ({ value: cart }) => {

    const history = useHistory();
    // const location = useLocation();

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

    const handleGoBack = () => {
        // history.go(-1)
        history.goBack()
    }

    const handleLoginBtn = () => {
        history.push('/login')
    }

    return (
        <>
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
            <hr />
            <div className="row">
                <div className="col-6">
                    <button onClick={handleGoBack}>go back</button>
                </div>
                <div className="col-6">
                    <button onClick={handleLoginBtn}>login</button>
                </div>
            </div>
            <hr />
        </>
    );
};

export default CartView;