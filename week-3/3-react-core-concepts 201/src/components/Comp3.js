import React, { Component } from 'react';
import ColorContext from './ColorContext';
class Comp3 extends Component {
    render() {

        return (
            <div className="card">
                <div className="card-body">

                    <ColorContext.Consumer>
                        {value => {
                            return (
                                <p style={{ color: value }}>component 3</p>
                            )
                        }}
                    </ColorContext.Consumer>


                </div>
            </div>
        );
    }
}

export default Comp3;