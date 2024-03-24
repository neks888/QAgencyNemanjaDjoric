import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useLogger from "./CustomHook";
import PropTypes from "prop-types";

function Posts({ message, name }) {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useLogger(message, name);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("There was an error!", error));
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        className="input-search"
        type="text"
        placeholder="Search by user name..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {filteredPosts.map((post) => (
        <div className="card" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          {/* Link to post details */}
          <Link to={`/post/${post.id}`}>View Details of a Post</Link>
        </div>
      ))}
    </div>
  );
}
Posts.propTypes = {
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Posts;
