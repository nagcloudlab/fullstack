import React, { useState } from 'react';

const ReviewForm = ({ onSubmit }) => {

    const [isOpen, setOpen] = useState(false)

    const [review, setReview] = useState({})

    const handleChange = e => {
        let field = e.target.id
        let fieldValue = e.target.value;
        setReview({ ...review, [field]: fieldValue })
    };

    const handleSubmit = e => {
        e.preventDefault()
        onSubmit(review)
        setReview({})
        setOpen(false)
    }

    const renderForm = () => {
        if (!isOpen) {
            return (
                <button onClick={e => setOpen(!isOpen)}>
                    <i className="fa fa-plus"></i>
                </button>
            )
        } else {
            return (
                <div className="card">
                    <div className="card-header">ReviewForm</div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Stars</label>
                                <input value={review.stars} id="stars" onChange={handleChange} type="number" min="1" max="5" className="form-control" />
                                {review.stars < 2 ? 'oops' : ''}
                            </div>
                            <div className="form-group">
                                <label>Body</label>
                                <textarea value={review.body} id="body" onChange={handleChange} className="form-control" />
                            </div>
                            <button className="btn btn-sm btn-dark">submit</button>
                            &nbsp;
                            <button onClick={e => setOpen(!isOpen)} className="btn btn-sm btn-secondary">cancel</button>
                        </form>
                    </div>
                </div>
            )
        }
    }

    return (
        <>
            {renderForm()}
        </>
    );
};

export default ReviewForm;