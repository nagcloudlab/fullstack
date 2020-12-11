import React, { Component } from 'react';

// Neil Limaye

import store from '../store'

class TopicList extends Component {

    constructor(props) {
        super()
        this.state = {
            topics: store.getState().topics
        }
    }
    handleTopicClick(topic) {
        let { onSelect } = this.props
        if (onSelect)
            onSelect(topic)
    }
    renderTopics() {
        let { topics } = this.state
        let { topic: cTopic } = this.props
        return topics.map((topic) => {
            return (
                <tr className={topic === cTopic ? 'bg-primary' : ''} key={topic}>
                    <td style={{ cursor: 'pointer' }} onClick={e => this.handleTopicClick(topic)}>{topic}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">Topics</div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <tbody>
                            {this.renderTopics()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TopicList;