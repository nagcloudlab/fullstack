var React = require('react');


function Profile(props) {
    let { profile } = props;
    return (
        <div>
            <h1> React : ssr </h1>
            <h1> Name : {profile.name}</h1>
            <h2>Age : {profile.age}</h2>
        </div>
    );
}

module.exports = Profile;