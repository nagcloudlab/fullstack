import React, { Component } from 'react';

import store from '../store'

class MessageList extends Component {

    constructor(props) {
        super()
        let { channel } = props
        this.state = {
            messages: store.getState().messages[channel] || []
        }
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            let { channel } = this.props
            let messages = store.getState().messages[channel] || []
            this.setState({ messages })
        })
    }

    componentDidUpdate(prevProps, prevState) {
        let { channel: cChannel } = this.props
        let { channel: pChannel } = prevProps
        if (cChannel !== pChannel) {
            const messages = store.getState().messages[cChannel] || []
            this.setState({ messages })
        }
    }

    componentWillUnmount() {
        this.unsubscribe();
    }


    renderMessages() {
        let { messages } = this.state
        return messages.map((message, index) => {
            return (
                <tr key={index}>
                    <td>{message}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">messages</div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <tbody>
                            {this.renderMessages()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default MessageList;