import React from 'react';

// import { connect } from 'react-redux'

import { useSelector } from 'react-redux'

const Score = (/*{ goals }*/) => {

    const goals = useSelector(state => state.goals)

    return (
        <div className="alert alert-danger">
            Total goals : {goals.count}
        </div>
    );
};

// function mapStateToProps(state) {
//     return {
//         goals: state.goals
//     }
// }

// export default connect(mapStateToProps, null)(Score);

export default Score;