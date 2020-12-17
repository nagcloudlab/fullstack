import React from 'react';

// import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'

// action creators
const increment = v => {
    return { type: 'INCREMENT', value: v }
}
const decrement = v => {
    return { type: 'DECREMENT', value: v }
}

const Player = (props) => {
    const dispatch = useDispatch()
    return (
        <div className="alert alert-info">
            <button onClick={e => { dispatch(increment(1)) }} className="btn btn-success mr-3">hit goal (+1) </button>
            <button onClick={e => { dispatch(decrement(-1)) }} className="btn btn-danger">hit goal (-1) </button>
        </div>
    );
};

// const mapDispatchToProps = { increment, decrement }
// export default connect(null, mapDispatchToProps)(Player)

export default Player;