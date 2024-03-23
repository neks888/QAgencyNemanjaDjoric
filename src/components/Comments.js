import React, { useState, useEffect } from "react";
import axios from "axios";

function Comments({ id }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => setComments(response.data))
      .catch((error) => console.error("There was an error!", error));
  }, [id]);
  return (
    <React.Fragment>
      {comments.map((comment) => (
        <div className="comment" key={comment.id}>
          <p>{comment.body}</p>
        </div>
      ))}
    </React.Fragment>
  );
}

export default Comments;
