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

    renderTopics() {
        let { topics } = this.state
        return topics.map((topic) => {
            return (
                <tr key={topic}>
                    <td>{topic}</td>
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