import React, { Component } from 'react';

class Box extends Component {
    render() {
        let { title } = this.props
        return (
            <div className="card">
                <div className="card-header">{title}</div>
                <div className="card-body">
                    <div className="list-group">
                        {
                            this.props.children.map((child, index) => {
                                return <div key={index} className="list-group-item">{child}</div>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Box;