import React, { Component } from 'react';


import { connect } from '../react-store'

class ChannelList extends Component {

    handleChannelClick(channel) {
        let { onSelect } = this.props
        if (onSelect)
            onSelect(channel)
    }

    renderChannels() {
        let { channels } = this.props
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

function mapStateToProps(state) {
    return {
        channels: state.channels || []
    }
}

export default connect(mapStateToProps)(ChannelList);