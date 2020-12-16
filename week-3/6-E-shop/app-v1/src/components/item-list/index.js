import React, { useState } from 'react';
import Item from '../item';
import CartView from '../cart-view'

const ItemList = () => {

    const [items] = useState([
        {
            id: 1,
            name: 'Laptop',
            price: 145000,
            description: 'MAC pro 15 inch',
            can_buy: true,
            img_path: 'images/Laptop.png',
        },
        {
            id: 2,
            name: 'Mobile',
            price: 15000,
            description: 'iphone',
            can_buy: true,
            img_path: 'images/Mobile.png',
        }
    ])

    const [cart, setCart] = useState({})

    const [isCartOpen, setCartOpen] = useState(false)

    const addToCart = item => {
        let { id } = item
        let cartLine = cart[id]
        if (cartLine) {
            cartLine = { ...cartLine, qty: cartLine.qty + 1 }
        } else {
            cartLine = { item, qty: 1 }
        }
        setCart({ ...cart, [id]: cartLine })
    }

    const renderItems = () => {
        return items.map((dataItem) => {
            return (
                <div key={dataItem.id} className="list-group-item">
                    <Item value={dataItem} onBuy={addToCart} />
                </div>
            )
        })
    }

    const renderCartView = () => {
        return <CartView value={cart} />
    }

    return (
        <div>
            <hr />
            <i className="fa fa-shopping-cart"></i>&nbsp;
            <span>{Object.keys(cart).length}</span> item(s) in cart
            <hr />
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link" onClick={e => { e.preventDefault(); setCartOpen(false) }} href="/">Items</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={e => { e.preventDefault(); setCartOpen(true) }} href="/">Cart</a>
                </li>
            </ul>

            <hr />

            <div className="list-group">
                {isCartOpen && renderCartView()}
                {!isCartOpen && renderItems()}
            </div>

        </div>
    );
};

export default ItemList;