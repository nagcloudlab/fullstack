import React from 'react'
import Navbar from './components/navbar'
import ItemList from './components/item-list'


function App() {

  return (
    <div className="">
      <Navbar title="E-shop-v1" />
      <div className="container">
        <ItemList />
      </div>
    </div>
  );
}

export default App;
