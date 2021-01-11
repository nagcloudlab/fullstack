



function userReducer(state = {}, action) {

    let { type } = action

    switch (type) {
        case 'USER_LOGIN_SUCCESS': {
            let { user } = action
            return { currentUser: user }
        }
        case 'USER_LOGIN_FAILED': {
            let { message } = action
            return { currentUser: null, message }
        }
        case 'USER_LOGOUT': {
            return { currentUser: null, message: 'logout successfull' }
        }
        default: return state
    }


}

export { userReducer }