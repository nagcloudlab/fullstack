import React, { Component } from 'react';

import { connect } from '../react-store'

import { withCard } from '../react-card-style'

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
            <React.Fragment>
                {this.renderMessages()}
            </React.Fragment>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        messages: state.messages[props.channel] || []
    }
}

export default connect(mapStateToProps)(withCard(MessageList));