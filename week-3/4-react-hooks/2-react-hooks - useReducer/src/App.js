
import React, { useReducer } from 'react'

import './App.css';


import PostList from './post/PostList'
import NewPostForm from './post/NewPostForm'
import UserBar from './user/UserBar'


const defaultPosts = [
  { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl' },
  { title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Daniel Bugl' }
]

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


function App() {

  const [user, dispatchUser] = useReducer(userReducer, '')
  const [posts, dispatchPosts] = useReducer(postsReducer, defaultPosts)

  return (
    <div className="container">
      <hr />
      <h1> blog using react hooks </h1>
      <hr />
      <div style={{ padding: 8 }}>
        <UserBar user={user} dispatch={dispatchUser} />
        <hr />
        <NewPostForm user={user}  dispatch={dispatchPosts} />
        <br />
        <hr />
        <PostList posts={posts} />
      </div>
    </div>
  );
}

export default App;
