console.log("-index.js-")

function Person(name){
    this.name=name
}

const p1=new Person("Ranjani")

//--------------------------------------------------------
// react clock component
//--------------------------------------------------------

// jsx ==> new extension to write templates for component
function Clock(props) {
    // let timeZone = props.timeZone;
    // or
    let { timeZone } = props // de-structuring
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
        <div>
            <div className="row">
                <div className="col-4">
                    <Clock timeZone="America/New_york" />
                </div>
                <div className="col-4">
                    <Clock timeZone="Asia/Dubai" />
                </div>
                <div className="col-4">
                    <Clock timeZone="Asia/Kolkata" />
                </div>
            </div>
        </div>
    )
}


setInterval(() => {
    ReactDOM.render(<Board />, document.getElementById('root'))
}, 1000)

