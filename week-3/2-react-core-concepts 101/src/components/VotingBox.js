

import React, { Component } from 'react';
import Item from './Item';
import Total from './Total';

class VotingBox extends Component {
    constructor() {
        super()
        this.state = {
            totalCount: 0
        }
    }
    incrementTotalCount(v) {
        let { totalCount } = this.state;
        this.setState({ totalCount: totalCount + v })
    }
    render() {
        let { totalCount } = this.state

        let items=[
            "item-1",
            "item-2",
            "item-3",
            "item-4",
            "item-5",
            "item-6",
            "item-7",
            "item-8",
            "item-9",
            "item-10",
        ]

        return (
            <div className="card">
                <div className="card-header">
                    Voting Box  <span className="badge badge-danger">{totalCount}</span>
                </div>
                <div className="card-body">
                    <div className="row">
                        {
                            items.map(i=>{
                                return <Item key={i} value={i} onVote={v=>this.incrementTotalCount(v)}/>
                            })
                        }
                    </div>
                    <div className="mt-3">
                        <Total value={totalCount} />
                    </div>
                </div>
            </div>
        );
    }
}

export default VotingBox;