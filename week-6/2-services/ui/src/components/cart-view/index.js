import React from 'react';
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'

const CartView = () => {

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const history = useHistory();

    let total = 0
    let keys = Object.keys(cart)

    const handleRemoveCartItem = item => {
        let action = { type: 'CART_ITEM_REMOVE', item }
        dispatch(action)
    }

    const handleCartItemQty = (qty, item) => {
        let action = { type: 'CART_ITEM_QTY', item, qty }
        dispatch(action)
    }


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
                            <i onClick={e => handleCartItemQty(1, item)} className="fa fa-plus p-2"></i>
                        </span>
                        <span className="m-2">{qty}</span>
                        <span className="badge badge-warning">
                            <i onClick={e => handleCartItemQty(-1, item)} className="fa fa-minus p-2"></i>
                        </span>
                    </td>
                    <td>
                        &#8377;{qty * item.price}
                    </td>
                    <td><i onClick={e => handleRemoveCartItem(item)} className="fa fa-trash"></i></td>
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