
import React, { useState, useReducer, useEffect } from 'react'
import appReducer from './reducers'


import PostList from './post/PostList'
import NewPostForm from './post/NewPostForm'
import UserBar from './user/UserBar'

import { ThemeContext, StateContext } from './contexts'
import Header from './Header'

import ThemeSwitch from './ThemeSwitch'



function App() {

  const [theme, setTheme] = useState({
    primaryColor: 'deepskyblue',
    secondaryColor: 'coral'
  })

  const [state, dispatch] = useReducer(appReducer, { user: '', posts: [] })
  const { user, posts } = state

  useEffect(() => {
    fetch("/api/posts")
      .then(response => response.json())
      .then(posts => dispatch({ type: 'FETCH_POSTS', posts }))
  }, [])


  useEffect(() => {
    if (!user) {
      document.title = "react hooks blog"
    } else {
      document.title = user + " react hooks blog"
    }
    return () => {
      console.log("willunmount")
    }
  }, [user])

  return (
    <div className="container">

      <StateContext.Provider value={{ state, dispatch }}>
        <ThemeContext.Provider value={theme}>
          <div style={{ padding: 8 }}>
            <Header text={"react hooks blog"} />
            <ThemeSwitch theme={theme} setTheme={setTheme} />
            <hr />
            <UserBar />
            <hr />
            {user && <NewPostForm />}
            <br />
            <hr />
            <PostList />
          </div>
        </ThemeContext.Provider>
      </StateContext.Provider>


    </div>
  );
}

export default App;
