import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import useLogger from "./CustomHook";
import PropTypes from "prop-types";

function PostDetails({ message, name }) {
  const { id } = useParams();
  const [postDetails, setPostDetails] = useState(null);
  useLogger(message, name);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => setPostDetails(response.data))
      .catch((error) => console.error("There was an error!", error));
  }, [id]);

  if (!postDetails) return <div>Loading...</div>;

  return (
    <div>
      <h2>{postDetails.title}</h2>
      <p>{postDetails.body}</p>
      <h2>Komentari:</h2>
      <Comments id={id} message={message} />
    </div>
  );
}

PostDetails.propTypes = {
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default PostDetails;
