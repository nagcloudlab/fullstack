import React, { useState } from 'react'
import './App.css';

function App() {
  const [visits, setVisits] = useState('')

  const handleVisit = async () => {
    const response = await fetch("http://localhost:8080/")
    const data = await response.json()
    setVisits(data.visits)
  }

  return (
    <div className="container">
      <hr />
      <h1>Front End</h1>
      <hr />
      <button onClick={e => handleVisit(e)} className="btn btn-primary">
        visit
      </button>
      <hr />
      your visit count = {visits}
      <hr />
    </div>
  );
}

export default App;
