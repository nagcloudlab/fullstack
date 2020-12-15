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

  const [tab, setTab] = useState(1)


  const renderBuyBtn = (item) => {
    return item.can_buy ? <button className="btn btn-sm btn-dark">buy</button> : null
  }


  const renderTabPanel = item => {
    switch (tab) {
      case 1: {
        return (
          <div>{item.description}</div>
        )
      }
      case 2: {
        return (
          <div>Not Yet</div>
        )
      }
      case 3: {
        return (
          <div>None Yet</div>
        )
      }
      default: {
        return null
      }
    }
  }

  const renderItems = () => {
    return items.map((item) => {
      return (
        <div key={item.id} className="list-group-item">
          <div className="row">
            <div className="col-12 col-sm-3 col-md-3">
              <img src={item.img_path} alt={item.name} className="img-fluid" />
            </div>
            <div className="col-12 col-sm-9 col-md-9">
              <h5>{item.name}</h5>
              <h6>&#8377;{item.price}</h6>

              {renderBuyBtn(item)}
              <br /><br />
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className={`nav-link ${tab === 1 ? 'active' : ''}`} href="#" onClick={e => setTab(1)}>Description</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${tab === 2 ? 'active' : ''}`} href="#" onClick={e => setTab(2)}>Specification</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${tab === 3 ? 'active' : ''}`} href="#" onClick={e => setTab(3)}>Reviews</a>
                </li>
              </ul>
              {renderTabPanel(item)}
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
