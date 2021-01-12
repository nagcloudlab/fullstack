import React, { useState, useRef } from 'react';

const ReviewForm = ({ onSubmit }) => {

    const [isOpen, setOpen] = useState(false)

    const authorRef = useRef(null)
    const starRef = useRef(null)
    const bodyRef = useRef(null)

    const handleSubmit = e => {
        e.preventDefault()
        let reviewData = {
            author: authorRef.current.value,
            stars: starRef.current.value,
            body: bodyRef.current.value
        }
        onSubmit(reviewData)
        authorRef.current.value = ''
        starRef.current.value = ''
        bodyRef.current.value = ''
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
                                <label>Author</label>
                                <input ref={authorRef} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Stars</label>
                                <input ref={starRef} type="number" min="1" max="5" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Body</label>
                                <textarea ref={bodyRef} className="form-control" />
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