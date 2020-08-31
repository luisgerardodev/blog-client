import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      await axios
        .get(`http://localhost:4001/posts/${postId}/comments`)
        .then((res) => setComments(Object.values(res.data)));
    };
    fetchPosts();
  }, [comments, postId]);

  const renderedComments = comments.map((c) => (
    <li key={c.id} className="list-group-item">
      {c.content}
    </li>
  ));

  return <ul className="list-group">{renderedComments}</ul>;
};

export default CommentList;
