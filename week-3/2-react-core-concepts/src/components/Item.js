import React, { Component } from 'react';

class Item extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
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
                        <button className="btn btn-sm btn-dark">+1</button>
                        &nbsp;&nbsp;
                        <button className="btn btn-sm btn-danger">-1</button>
                        <hr />
                        <span className="badge badge-info">{count}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;