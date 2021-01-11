


import { cartReducer } from './cart'
import { reviewsReducer } from './reviews'
import { itemsReducer } from './items'
import { userReducer } from './user'
import { networkStatusReducer } from './network-status'

import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    cart: cartReducer,
    reviews: reviewsReducer,
    items: itemsReducer,
    user: userReducer,
    networkStatus: networkStatusReducer,
});

export default rootReducer;