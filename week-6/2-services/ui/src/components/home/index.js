import React from 'react';

import Button from '../styled/Button'

const Home = () => {
    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4">Hello, cognizant!</h1>
                <hr className="my-4" />
                {/* <a className="btn btn-primary btn-lg" href="/" role="button">Learn fullstack</a> */}
                <Button href="/" primary>Learn fullstack</Button>
            </div>
        </div>
    );
};

export default Home;