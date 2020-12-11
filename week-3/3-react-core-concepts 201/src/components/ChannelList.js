import React, { Component } from 'react';


import { connect } from '../react-store'
import { withCard } from '../react-card-style'


// presentational component  ==> how things look
class ChannelList extends Component {

    handleChannelClick(channel) {
        let { onSelect } = this.props
        if (onSelect)
            onSelect(channel)
    }

    renderChannels() {
        let { channels, channel: cChannel } = this.props
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
            <React.Fragment>
                {this.renderChannels()}
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        channels: state.channels || []
    }
}

const ChannelListWithCard = withCard(ChannelList);
export default connect(mapStateToProps)(ChannelListWithCard);