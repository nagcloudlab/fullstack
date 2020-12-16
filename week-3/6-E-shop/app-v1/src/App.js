import React, { useState } from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import ItemList from './components/item-list'
import NotFound from './components/not-found'
import Login from './components/login'
import ItemDetails from './components/item-details'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CartView from './components/cart-view';


function App() {


  const [cart, setCart] = useState({})

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

  return (
    <div className="">
      <Navbar title="E-shop-v1" />
      <div className="container">
        <Router>
          <div>
            <hr />
            <i className="fa fa-shopping-cart"></i>&nbsp;
            <span>{Object.keys(cart).length}</span> item(s) in cart
            <hr />
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" to="/items">Items</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/orders">Orders</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
            <hr />
          </div>

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/items">
              <ItemList onBuy={addToCart} />
            </Route>
            <Route path="/cart">
              <CartView value={cart} />
            </Route>
            <Route path="/item/:itemId" component={ItemDetails} />
            <Route path="/login" component={Login} />
            <Route>
              <NotFound />
            </Route>
          </Switch>

        </Router>

      </div>
    </div>
  );
}

export default App;
