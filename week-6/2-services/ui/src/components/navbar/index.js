
import React from 'react';

const Navbar = ({ title }) => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{title}</a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar; 