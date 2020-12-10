

import React, { Component } from 'react';
import Item from './Item';
import Total from './Total';

class VotingBox extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Voting Box
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-3"><Item value="foo" /></div>
                        <div className="col-3"><Item value="bar"/></div>
                        <div className="col-3"><Item value="baz"/></div>
                    </div>
                    <div className="mt-3">
                        <Total />
                    </div>
                </div>
            </div>
        );
    }
}

export default VotingBox;