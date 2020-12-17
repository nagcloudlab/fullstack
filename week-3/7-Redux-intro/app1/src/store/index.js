
import { createStore, combineReducers } from 'redux'


const goalsReducer = function (state = {}, action) {
    let { type } = action;
    // INCREMENT , DECREMENT
    switch (type) {
        case 'INCREMENT': {
            let { value } = action
            return { count: state.count + value } // New State
        }
        case 'DECREMENT': {
            let { value } = action
            return { count: state.count - value } // New State
        }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    goals: goalsReducer
})

const initialState = {
    goals: {
        count: 10
    }
}

const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;