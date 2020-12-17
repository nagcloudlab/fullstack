


import { cartReducer } from './cart'
import { reviewsReducer } from './reviews'

import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    cart: cartReducer,
    reviews: reviewsReducer
});

export default rootReducer;