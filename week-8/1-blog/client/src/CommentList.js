import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default ({ comments }) => {
  // const [comments, setComments] = useState([]);

  // const fetchData = async () => {
  //   const res = await axios.get(
  //     `http://localhost:4002/posts/${postId}/comments`
  //   );

  //   setComments(res.data || []);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);


  const renderedComments = comments.map(comment => {
    var content = ''
    if (comment.status === "PENDING")
      content = "waiting for moderation"
    else if (comment.status === "approved") {
      content = comment.content
    } else {
      content = "commnet rejected"
    }
    return (
      <li key={comment.id}>{content}</li>
    );
  });

  return <ul>{renderedComments}</ul>;
};
