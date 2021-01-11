


import { cartReducer } from './cart'
import { reviewsReducer } from './reviews'
import { itemsReducer } from './items'
import { networkStatusReducer } from './network-status'

import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    cart: cartReducer,
    reviews: reviewsReducer,
    items: itemsReducer,
    networkStatus: networkStatusReducer,
});

export default rootReducer;