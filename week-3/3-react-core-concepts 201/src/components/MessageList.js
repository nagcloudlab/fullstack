import React, { Component } from 'react';

import { connect } from '../react-store'


class MessageList extends Component {
    
    renderMessages() {
        let { messages } = this.props
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

function mapStateToProps(state, props) {
    return {
        messages: state.messages[props.channel] || []
    }
}

export default connect(mapStateToProps)(MessageList);