
import React, { useState } from 'react'

import './App.css';


import PostList from './post/PostList'
import NewPostForm from './post/NewPostForm'
import UserBar from './user/UserBar'


const defaultPosts = [
  { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl' },
  { title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Daniel Bugl' }
]

function App() {

  const [user, setUser] = useState('') // user
  const [posts, setPosts] = useState(defaultPosts) // posts

  return (
    <div className="container">
      <hr />
      <h1> blog using react hooks </h1>
      <hr />
      <div style={{ padding: 8 }}>
        <UserBar user={user} setUser={setUser} />
        <hr />
        <NewPostForm user={user} posts={posts} setPosts={setPosts} />
        <br />
        <hr />
        <PostList posts={posts} />
      </div>
    </div>
  );
}

export default App;
