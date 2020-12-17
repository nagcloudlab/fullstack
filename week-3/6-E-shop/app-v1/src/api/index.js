
import axios from 'axios'

const baseUrl = "http://localhost:8080/api"



export function getItems() {
    return function (dispatch) {
        dispatch({ type: 'REQUEST_BEGIN', message: 'loading items...' })
        axios
            .get(`${baseUrl}/items`)
            .then(response => response.data)
            .then(items => {
                dispatch({ type: 'REQUEST_FINISHED', message: '' })
                dispatch({ type: 'LOAD_ITEMS', items })
            })
            .catch(err => {
                dispatch({ type: 'REQUEST_ERROR', message: err.message })
            })
    }
}

export function getReviews(itemId) {
    return function (dispatch) {
        dispatch({ type: 'REQUEST_BEGIN', message: 'loading reviews...' })
        axios
            .get(`${baseUrl}/items/${itemId}/reviews`)
            .then(response => response.data)
            .then(reviews => {
                dispatch({ type: 'REQUEST_FINISHED', message: '' })
                dispatch({ type: 'LOAD_REVIEWS', reviews, itemId })
            })
            .catch(err => {
                dispatch({ type: 'REQUEST_ERROR', message: err.message })
            })
    }
}


export function postNewReview(review, itemId) {
    return function (dispatch) {
        axios
            .post(`${baseUrl}/items/${itemId}/reviews`, review)
            .then(response => response.data)
            .then(rev => {
                dispatch({ type: 'ADD_NEW_REVIEW', review: rev, itemId })
            })
            .catch(err => {
                console.log(err)
            })
    }
}