import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import useLogger from "./CustomHook";

function Comments({ id, message, name }) {
  const [comments, setComments] = useState([]);
  useLogger(message, "Comments");
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

Comments.propTypes = {
  id: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Comments;
