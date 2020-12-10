import React, { Component } from 'react';
import Comp3 from './Comp3';

class Comp2 extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <p>component 2</p>
                    <Comp3 />
                </div>
            </div>
        );
    }
}

export default Comp2;