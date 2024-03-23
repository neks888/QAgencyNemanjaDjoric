import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function PostDetails() {
  const { id } = useParams();
  const [postDetails, setPostDetails] = useState(null);

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
      {/* Display comments here */}
    </div>
  );
}

export default PostDetails;
