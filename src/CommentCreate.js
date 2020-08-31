import React, { useState } from 'react';
import axios from 'axios';

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });

    setContent('');
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <form onSubmit={onSubmit}>
        <div className="input-group my-3">
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Write a comment..."
            aria-label="comment"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-primary"
              type="submit"
              id="button-addon2"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentCreate;
