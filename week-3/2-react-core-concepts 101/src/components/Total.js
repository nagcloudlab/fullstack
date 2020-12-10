import React, { Component } from 'react';

class Total extends Component {
    render() {
        let { value } = this.props
        let className=value<0?'card-body bg-warning':'card-body bg-default'
        return (
            <div className="card">
                <div className={className}>
                    Total : <span className="badge badge-danger">{value}</span>
                </div>
            </div>
        );
    }
}

export default Total;