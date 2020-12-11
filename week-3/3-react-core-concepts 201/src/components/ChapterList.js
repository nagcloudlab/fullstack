import React, { Component } from 'react';

// Neil Limaye

import store from '../store'

class ChapterList extends Component {

    constructor(props) {
        super()
        this.state = {
            chapters: store.getState().chapters['javascript']
        }
    }

    renderChapters() {
        let { chapters } = this.state
        return chapters.map((chapter,index) => {
            return (
                <tr key={index}>
                    <td>{chapter}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">chapters</div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <tbody>
                            {this.renderChapters()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ChapterList;