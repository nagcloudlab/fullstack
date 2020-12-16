import React, { useState, useEffect } from 'react';
import Review from '../review'

import axios from 'axios'
import ReviewForm from '../review-form-v2';

const Item = ({ value: item, onBuy }) => {

    const [tab, setTab] = useState(1)

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        if (tab === 3) {
            const apiUrl = `http://localhost:8080/api/items/${item.id}/reviews`
            axios
                .get(apiUrl)
                .then(response => response.data)
                .then(reviews => {
                    setReviews(reviews)
                })
        }
    }, [tab])

    const handleBuy = () => {
        onBuy(item)
    }

    const handleNewReview = (review) => {
        const apiUrl = `http://localhost:8080/api/items/${item.id}/reviews`
        axios
            .post(apiUrl, review)
            .then(response => response.data)
            .then(review => {
                setReviews([review, ...reviews])
            })
    }

    const renderBuyBtn = () => {
        if (item.canBuy) {
            return <button onClick={handleBuy} className="btn btn-sm btn-dark">Add to cart</button>
        }
    }

    const renderReviews = () => {
        return reviews.map((rev, idx) => {
            return <Review value={rev} key={idx} />
        })
    }

    const renderTabPanel = () => {
        switch (tab) {
            case 1: {
                return (<div>{item.description}</div>)
            }
            case 2: {
                return (<div>Not Yet</div>)
            }
            case 3: {
                return (
                    <div>
                        {renderReviews()}
                        <div className="row">
                            <div className="col-md-8">
                                <ReviewForm onSubmit={handleNewReview} />
                            </div>
                        </div>
                    </div>)
            }
            default: {
                return null
            }
        }
    }

    return (
        <div>
            <div className="row">
                <div className="col-12 col-sm-3 col-md-3">
                    <img src={item.imagePath} alt={item.name} className="img-fluid" />
                </div>
                <div className="col-12 col-sm-9 col-md-9">
                    <h5>{item.name}</h5>
                    <h6>&#8377;{item.price}</h6>
                    {renderBuyBtn(item)}
                    <hr />
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a
                                className={`nav-link ${tab === 1 ? 'active' : ''}`}
                                href="/"
                                onClick={e => { e.preventDefault(); setTab(1) }}>
                                Description
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${tab === 2 ? 'active' : ''}`}
                                href="/"
                                onClick={e => { e.preventDefault(); setTab(2) }}>
                                Specification
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${tab === 3 ? 'active' : ''}`}
                                href="/"
                                onClick={e => { e.preventDefault(); setTab(3) }}>
                                Reviews
                            </a>
                        </li>
                    </ul>
                    {renderTabPanel(item)}
                </div>
            </div>
        </div >
    );
};

export default Item;