import React, { Component } from 'react';
import Comp2 from './Comp2';
import ColorContext from './ColorContext'

class Comp1 extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <p>component 1</p>

                    <ColorContext.Provider value={this.props.color}>
                        <Comp2 />
                    </ColorContext.Provider>

                </div>
            </div>
        );
    }
}

export default Comp1;