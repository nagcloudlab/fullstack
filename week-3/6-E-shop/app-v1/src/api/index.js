
import axios from 'axios'

const baseUrl = "http://localhost:8080/api"



export function getReviews(itemId) {

    return function (dispatch) {
        axios
            .get(`${baseUrl}/items/${itemId}/reviews`)
            .then(response => response.data)
            .then(reviews => {
                dispatch({ type: 'LOAD_REVIEWS', reviews, itemId })
            })
            .catch(err => {
                console.log(err)
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