import React, { Component } from 'react';
import ChannelList from './ChannelList';
import MessageList from './MessageList';
import ErrorBoundary from './ErrorBoundary'

class Slack extends Component {
    constructor() {
        super()
        this.state = {
            channel: null
        }
    }
    changeChannel(channel) {
        this.setState({ channel })
    }
    render() {
        let { channel } = this.state
        return (
            <div className="card">
                <div className="card-header">Slack</div>
                <div className="card-body">
                    <div className="row">
                        <ErrorBoundary>
                            <div className="col-4">
                                <ChannelList title={"channel list"} channel={channel}
                                    onSelect={channel => this.changeChannel(channel)} />
                            </div>
                            <div className="col-6">
                                <MessageList title={"messages"} channel={channel} />
                            </div>
                        </ErrorBoundary>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slack;