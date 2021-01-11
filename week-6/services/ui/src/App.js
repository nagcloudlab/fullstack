import React, { useEffect } from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import ItemList from './components/item-list'
import NotFound from './components/not-found'
import Login from './components/login'
import Alert from './components/alert'
import CartBadge from './components/cart-badge'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CartView from './components/cart-view';
import jwtDecode from "jwt-decode";

import * as api from './api'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  useEffect(() => {
    let token = localStorage.getItem('auth-token')
    if (token) {
      const user = jwtDecode(token);
      dispatch({ type: 'USER_LOGIN_SUCCESS', user })
    }
  }, [])
  const handleLogout = (e) => {
    e.preventDefault()
    localStorage.removeItem('auth-token')
    dispatch({ type: 'USER_LOGOUT' })
  }
  return (
    <div className="">
      <Navbar title="E-shop-v1" />
      <div className="container">
        <Router>
          <div>
            <hr />
            <CartBadge />
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
                {user.currentUser ? <a className="nav-link" href="/" onClick={e => handleLogout(e)}>Logout</a> : null}
                {user.currentUser ? null : <Link className="nav-link" to="/login">Login</Link>}
              </li>
            </ul>
            <hr />
          </div>

          <Alert />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/items">
              <ItemList />
            </Route>
            <Route path="/cart">
              <CartView />
            </Route>
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
