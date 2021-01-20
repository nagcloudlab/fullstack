import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

import 'bootstrap/dist/css/bootstrap.css'

export default () => {
  return (
    <div className="container">
      <hr />
      <h1> blog - microservices</h1>
      <hr />
      <h2>New Post</h2>
      <PostCreate />
      <hr />
      <h2>All Posts</h2>
      <PostList />
    </div>
  );
};
