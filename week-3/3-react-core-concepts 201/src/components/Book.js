import React, { Component } from 'react';
import TopicList from './TopicList';
import ChapterList from './ChapterList';

class Book extends Component {
    constructor() {
        super()
        this.state = {
            topic: null
        }
    }
    changeTopic(topic) {
        this.setState({ topic })
    }
    render() {
        let { topic } = this.state
        return (
            <div>
                <div className="row">
                    <div className="col-4">
                        <TopicList topic={topic} onSelect={topic => this.changeTopic(topic)} />
                    </div>
                    <div className="col-6">
                        <ChapterList topic={topic} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Book;