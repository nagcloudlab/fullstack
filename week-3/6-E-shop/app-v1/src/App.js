import React, { useState } from 'react'



function App() {

  const [items] = useState([
    {
      id: 1,
      name: 'Laptop',
      price: 145000,
      description: 'MAC pro 15 inch',
      canBuy: true
    },
    {
      id: 2,
      name: 'Mobile',
      price: 15000,
      description: 'iphone',
      canBuy: true
    }
  ])


  const renderBuyBtn = (item) => {
    return item.canBuy ? <button className="btn btn-sm btn-dark">buy</button> : null
  }
  const renderItems = () => {
    return items.map((item) => {
      return (
        <div key={item.id} className="list-group-item">
          <h5>{item.name}</h5>
          <h6>&#8377;{item.price}</h6>
          <div>{item.description}</div>
          {renderBuyBtn(item)}
        </div>
      )
    })
  }

  return (
    <div className="">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">E-Shop</a>
        </div>
      </nav>
      <hr />
      <hr />
      <div className="container">
        <div className="list-group">
          {renderItems()}
        </div>
      </div>
    </div>
  );
}

export default App;
