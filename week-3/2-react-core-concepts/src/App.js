import React from 'react'
import Greeting from './components/Greeting'
// author-1
class App extends React.Component {
  state = {
    message: 'greetings'
  }
  constructor(props) {
    super();
    console.log("App :: constructor()")
    //console.log(props)
  }
  changeMessage(message) {
    // this.setState() ==> trigger diffing
    this.setState({
      message
    })
  }
  render() {
    console.log("App :: render()")
    let { title = "title", trainer = "unknown" } = this.props
    let { message } = this.state
    return (
      <div className="container">
        <hr />
        <h1>{title} - <small>by {trainer}</small></h1>
        <hr />
        <button onClick={e => this.changeMessage("good morning")} className="btn btn-dark">GM</button>
        <button onClick={e => this.changeMessage("good noon")} className="btn btn-dark">GN</button>
        <button onClick={e => this.changeMessage("good evening")} className="btn btn-dark">GE</button>
        <hr />
        <Greeting message={message} />
      </div>
    )
  }
}


export default App;
