import React from 'react'

import Greeting from './components/Greeting-v2'
import VotingBox from './components/VotingBox';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      message: 'greetings'
    }
    console.log("App :: constructor()")
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

        <VotingBox />


        <hr />
        <button onClick={e => this.changeMessage("good morning")} className="btn btn-dark">GM</button>
        <button onClick={e => this.changeMessage("good noon")} className="btn btn-dark">GN</button>
        <button onClick={e => this.changeMessage("good evening")} className="btn btn-dark">GE</button>
        <button onClick={e => this.changeMessage("")} className="btn btn-danger">Remove</button>
        <hr />
        {message ? <Greeting message={message} /> : null}
      </div>
    )
  }


  componentDidMount() {
    console.log("App :: componentDidMount()")
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("App :: shouldComponentUpdate()")
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("App :: componentDidUpdate()")
  }

  componentWillUnmount() {
    console.log("App :: componentWillUnmount()")
  }


}


export default App;
