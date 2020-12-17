

import React from 'react';
import Player from './Player';
import Score from './Score';

const Ground = () => {

    return (
        <div className="card">
            <div className="card-header">ground</div>
            <div className="card-body">

                <div className="row">
                    <div className="col-6">
                        <Player />
                    </div>
                    <div className="col-6">
                        <Player />
                    </div>
                </div>

                <Score />

            </div>
        </div>
    );
};

export default Ground;