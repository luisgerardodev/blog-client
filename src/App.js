import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

const App = () => (
  <div className="container pt-5">
    <h1>Post Create</h1>
    <PostCreate />
    <hr />
    <h2>All Posts</h2>
    <PostList />
  </div>
);

export default App;
