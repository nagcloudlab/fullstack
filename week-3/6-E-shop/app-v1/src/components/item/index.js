import React, { useState } from 'react';
import Review from '../review'

const Item = ({ value: item, onBuy }) => {

    const [tab, setTab] = useState(1)

    const [reviews] = useState([
        { author: 'who1', stars: 4.5, body: 'sample review-1' },
        { author: 'who2', stars: 3, body: 'sample review-2 ' }
    ])

    const handleBuy = () => {
        onBuy(item)
    }

    const renderBuyBtn = () => {
        if (item.can_buy) {
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
                return (<div>{renderReviews()}</div>)
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
                    <img src={item.img_path} alt={item.name} className="img-fluid" />
                </div>
                <div className="col-12 col-sm-9 col-md-9">
                    <h5>{item.name}</h5>
                    <h6>&#8377;{item.price}</h6>
                    {renderBuyBtn(item)}
                    <br /><br />
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