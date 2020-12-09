

function Clock(props) {
  let { timeZone } = props
  return (
    <div className="card">
      <div className="card-header">{timeZone}</div>
      <div className="card-body">
        <span className="badge badge-dark">{new Date().toLocaleTimeString('en', { timeZone })}</span>
      </div>
    </div>
  )
}


function Board() {
  return (
    <div className="row">
      <div className="col-4">
        <Clock timeZone="Asia/Kolkata" />
      </div>
      <div className="col-4">
        <Clock timeZone="Asia/Dubai" />
      </div>
      <div className="col-4">
        <Clock timeZone="America/New_york" />
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="container">

      <hr />
      <h1>world clocks : <small>powered by react.js</small></h1>
      <hr />
      <Board />

    </div>
  );
}

export default App;
