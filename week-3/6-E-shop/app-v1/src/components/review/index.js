import React from 'react';


function renderStars(n) {
    let stars = []
    let i
    for (i = 0; i < Math.floor(n); i++) {
        stars.push(<i key={i} className="fa fa-star"></i>)
    }
    if ((n - 0.5) % 2 === 0) {
        stars.push(<i key={i} className="fa fa-star-half"></i>)
    }
    return stars;
}

const Review = ({ value: rev }) => {
    return (
        <div className="alert alert-warning">
            {rev.author} &mdash; {renderStars(rev.stars)}
            <hr />
            <div>{rev.body}</div>
        </div>
    );
};

export default Review;