import React, { useContext } from 'react';
import { VoteContext } from './Box'
const Batch1 = () => {
    const { dispatch } = useContext(VoteContext)
    return (
        <div className="card card-body">
            <button onClick={e => dispatch('up')} className="btn btn-lg btn-dark">
                Batch1 : Up Voting 
            </button>
        </div>
    );
};

export default Batch1;