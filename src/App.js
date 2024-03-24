import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts";
import PostDetails from "./components/PostDetails";
import Navbar from "./components/Navbar";

function App() {
  const message = "Hello from";
  return (
    <React.Fragment>
      <Router>
        <Navbar message={message} name={`Navbar`} />
        <Routes>
          <Route path="/" element={<h1>Hi, Welcome to the app</h1>} />
          <Route
            path="/posts"
            element={<Posts message={message} name="Posts" />}
          />
          <Route
            path="/post/:id"
            element={<PostDetails message={message} name="PostDetails" />}
          />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
