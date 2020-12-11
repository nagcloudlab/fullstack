import React, { Component } from 'react';

import store from '../store'

class ChannelList extends Component {

    constructor(props) {
        super()
        this.state = {
            channels: store.getState().channels || []
        }
    }


    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            let channels = store.getState().channels
            this.setState({ channels })
        })
    }

    componentDidUpdate(prevProps, prevState) { }

    
    componentWillUnmount() {
        this.unsubscribe()
    }

    handleChannelClick(channel) {
        let { onSelect } = this.props
        if (onSelect)
            onSelect(channel)
    }

    renderChannels() {
        let { channels } = this.state
        let { channel: cChannel } = this.props
        return channels.map((channel) => {
            return (
                <tr className={channel === cChannel ? 'bg-primary' : ''} key={channel}>
                    <td style={{ cursor: 'pointer' }}
                        onClick={e => this.handleChannelClick(channel)}>{channel}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">Channels</div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <tbody>
                            {this.renderChannels()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ChannelList;