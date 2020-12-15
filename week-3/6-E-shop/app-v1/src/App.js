import React, { useState } from 'react'



function App() {

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


  const renderBuyBtn = (item) => {
    return item.can_buy ? <button className="btn btn-sm btn-dark">buy</button> : null
  }

  const renderItems = () => {
    return items.map((item) => {
      return (
        <div key={item.id} className="list-group-item">
          <div className="row">
            <div className="col-12 col-sm-3 col-md-3">
              <img src={item.img_path} alt={item.name} className="img-fluid" />
            </div>
            <div className="col-12 col-sm-3 col-md-3">
              <h5>{item.name}</h5>
              <h6>&#8377;{item.price}</h6>
              <div>{item.description}</div>
              {renderBuyBtn(item)}
            </div>
          </div>
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
