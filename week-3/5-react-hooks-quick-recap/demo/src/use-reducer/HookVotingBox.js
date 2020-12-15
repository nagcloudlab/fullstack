

import React, { useReducer } from 'react';

// 
const reducer = (state, action) => {
    
    let { type, value = 0 } = action

    switch (type) {
        case 'INCREMENT': {
            return { ...state, count: state.count + value }
        }
        case 'DECREMENT': {
            return { ...state, count: state.count - value }
        }
        case 'RESET': {
            return { ...state, count: 1000 }
        }
        default:
            return state
    }
}

const initialState = {
    count: 1000
}



const HookVotingBox = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const { count } = state

    return (
        <div className="card card-body">
            <div className="row">
                <div className="col-3">
                    <button onClick={e => dispatch({ type: 'INCREMENT', value: 1 })} className="btn btn-lg btn-primary">+1</button>
                </div>
                <div className="col-3">
                    <button onClick={e => dispatch({ type: 'DECREMENT', value: 1 })} className="btn btn-lg btn-primary">-1</button>
                </div>
                <div className="col-3">
                    <button onClick={e => dispatch({ type: 'INCREMENT', value: 10 })} className="btn btn-lg btn-primary">+10</button>
                </div>
                <div className="col-3">
                    <button onClick={e => dispatch({ type: 'DECREMENT', value: 10 })} className="btn btn-lg btn-primary">-10</button>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-3">
                    <button onClick={e => dispatch({ type: 'RESET' })} className="btn btn-lg btn-warning">reset</button>
                </div>
                <div className="col-4">
                    <h3>{count}</h3>
                </div>
            </div>

        </div >
    );
};

export default HookVotingBox;