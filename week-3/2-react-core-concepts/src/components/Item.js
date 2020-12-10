import React, { Component } from 'react';

class Item extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    doVote(v) {
        this.setState({
            count: this.state.count + v
        })
        let { onVote } = this.props
        if (onVote)
            onVote(v) // 
    }
    render() {
        let { value } = this.props
        let { count } = this.state
        return (
            <div className="">
                <div className="card">
                    <div className="card-body">
                        <span>{value}</span>
                        <hr />
                        <button onClick={e => this.doVote(1)} className="btn btn-sm btn-dark">+1</button>
                        &nbsp;&nbsp;
                        <button onClick={e => this.doVote(-1)} className="btn btn-sm btn-danger">-1</button>
                        <hr />
                        <span className="badge badge-info">{count}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;