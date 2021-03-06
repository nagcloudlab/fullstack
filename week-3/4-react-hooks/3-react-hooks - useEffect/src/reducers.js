
function userReducer(state, action) {
    let { type } = action
    switch (type) {
        case 'LOGIN':
        case 'REGISTER':
            return action.username
        case 'LOGOUT':
            return ''

        default:
            return state;
    }
}

function postsReducer(state, action) {
    let { type } = action
    switch (type) {
        case 'CREATE_NEW_POST':
            const newPost = { title: action.title, content: action.content, author: action.author }
            return [newPost, ...state]
        default:
            return state;
    }
}


export default function appReducer(state, action) {
    return {
        user: userReducer(state.user, action),
        posts: postsReducer(state.posts, action)
    }
}