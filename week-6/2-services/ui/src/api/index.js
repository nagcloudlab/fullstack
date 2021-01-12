
import axios from 'axios'
import jwtDecode from "jwt-decode";

const baseUrl = "http://localhost:8080/api"


export function auth(credentials) {

    return function (dispatch) {
        axios
            .post(`${baseUrl}/auth`, credentials)
            .then(response => response.data)
            .then(auth => {
                localStorage.setItem('auth-token', auth.token)
                const user = jwtDecode(auth.token);
                dispatch({ type: 'USER_LOGIN_SUCCESS', user })
            })
            .catch(error => {
                dispatch({ type: 'USER_LOGIN_FAILED', message: error.message })
            })
    }

}



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



export function addToCart(item) {
    return function (dispatch) {
        axios
            .post(`${baseUrl}/cart/`, { item })
            .then(response => response.data)
            .then(rev => {
                dispatch({ type: 'BUY', item })
            })
            .catch(err => {
                console.log(err)
            })
    }
}


export function loadCart() {
    return function (dispatch) {
        axios
            .get(`${baseUrl}/cart`)
            .then(response => response.data)
            .then(cart => {
                dispatch({ type: 'LOAD_CART', cart })
            })
            .catch(err => {
                console.log(err)
            })
    }
}
