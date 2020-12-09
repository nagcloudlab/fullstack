import React from 'react';
// author-2
class Greeting extends React.Component {
    constructor(props) {
        super();
        console.log("Greeting :: constructor()")
        //console.log(props)
    }
    render() {
        console.log("Greeting :: render()")
        let { message } = this.props
        return (
            <div className="alert alert-info">
                <p>{message}</p>
                <hr />
                <p>{new Date().toLocaleTimeString('en')}</p>
            </div>
        )
    }
}

export default Greeting