

function reviewsReducer(state = {}, action) {

    let { type } = action

    switch (type) {
        case 'ADD_NEW_REVIEW': {
            let { review, itemId } = action
            let prevReviews = state[itemId] || []
            return { ...state, [itemId]: [review, ...prevReviews] }
        }
        case 'LOAD_REVIEWS': {
            let { reviews, itemId } = action
            return { ...state, [itemId]: reviews }
        }
        default: return state
    }


}

export { reviewsReducer }