import React from 'react';
import { useHistory } from "react-router-dom";

const CartView = ({ value: cart }) => {

    const history = useHistory();

    let total = 0

    let keys = Object.keys(cart)

    const renderCartItems = () => {
        return keys.map((key => {
            let cartLine = cart[key]
            let { item, qty } = cartLine
            total += qty * item.price
            return (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                    <td>
                        <span className="badge badge-warning">
                            <i className="fa fa-plus"></i>
                        </span>
                        <span className="m-2">{qty}</span>
                        <span className="badge badge-warning">
                            <i className="fa fa-minus"></i>
                        </span>
                    </td>
                    <td>
                        &#8377;{qty * item.price}
                    </td>
                    <td><i className="fa fa-trash"></i></td>
                </tr>
            )
        }))
    }

    const handleGoBack = () => {
        // history.go(-1)
        history.goBack()
    }

    if (keys.length === 0)
        return (
            <div>cart is empty</div>
        )

    return (
        <>
            <div className="row">
                <div className="col-8">
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
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderCartItems()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <hr />
                    Total : &#8377;{total}
                    <hr />
                    <div className="row">
                        <div className="col-6">
                            <button onClick={handleGoBack}>go back</button>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </>
    );
};

export default CartView;