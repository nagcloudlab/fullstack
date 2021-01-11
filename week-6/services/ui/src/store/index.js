

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import rootReducer from '../reducers'


const intialState = {
    cart: {},
    reviews: {},
    items: [],
    user: {

    }
}
const middleware = [thunk]
const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const store = createStore(rootReducer, intialState, composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
));






export default store;