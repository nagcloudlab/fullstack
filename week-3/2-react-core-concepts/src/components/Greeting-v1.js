import React from 'react';



class Greeting extends React.Component {
   
    constructor(props) {
        super();
        console.log("Greeting :: constructor()")
    }

    render() {
        console.log("Greeting :: render()")
        let { message } = this.props
        return (
            <div className="alert alert-info">
                <p>{message}</p>
                <hr />
                { /*<p>{new Date().toLocaleTimeString('en')}</p> */}
            </div>
        )
    }

    componentDidMount() {
        console.log("Greeting :: componentDidMount()")
        this.interval = setInterval(() => {
            //this.forceUpdate();
        }, 1000)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Greeting :: shouldComponentUpdate()")
        return this.props.message !== nextProps.message;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Greeting :: componentDidUpdate()")
    }

    componentWillUnmount() {
        clearInterval(this.interval)
        console.log("Greeting :: componentWillUnmount()")
    }

}



export default Greeting