
import React, { useReducer } from 'react'
import appReducer from './reducers'


import PostList from './post/PostList'
import NewPostForm from './post/NewPostForm'
import UserBar from './user/UserBar'


const defaultPosts = [
  { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl' },
  { title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Daniel Bugl' }
]

function App() {

  // const [user, dispatchUser] = useReducer(userReducer, '')
  // const [posts, dispatchPosts] = useReducer(postsReducer, defaultPosts)

  const [state, dispatch] = useReducer(appReducer, { user: '', posts: defaultPosts })
  const { user, posts } = state

  return (
    <div className="container">
      <hr />
      <h1> blog using react hooks </h1>
      <hr />
      <div style={{ padding: 8 }}>
        <UserBar user={user} dispatch={dispatch} />
        <hr />
        {user && <NewPostForm user={user} dispatch={dispatch} />}
        <br />
        <hr />
        <PostList posts={posts} />
      </div>
    </div>
  );
}

export default App;
