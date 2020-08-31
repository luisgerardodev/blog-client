import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      await axios.get('http://localhost:4000/posts').then((res) => {
        setPosts(Object.values(res.data));
      });
    };
    fetchPosts();
  }, [posts]);

  const renderedPosts = posts.map((p) => (
    <div key={p.id} className="card my-3" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{p.title}</h5>
        <hr />
        <CommentList postId={p.id} />

        <CommentCreate postId={p.id} />
      </div>
    </div>
  ));

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};

export default PostList;
