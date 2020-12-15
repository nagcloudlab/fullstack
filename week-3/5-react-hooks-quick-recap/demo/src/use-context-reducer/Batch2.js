import React, { useContext } from 'react';

import { VoteContext } from './Box'

const Batch2 = () => {
    const { dispatch } = useContext(VoteContext)
    return (
        <div className="card card-body">
            <button onClick={e => dispatch('down')} className="btn btn-lg btn-primary">Batch2 : Vote</button>
        </div>
    );
};

export default Batch2;