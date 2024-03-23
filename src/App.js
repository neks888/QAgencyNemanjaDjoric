import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts";
import PostDetails from "./components/PostDetails";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </Router>
      export default App;
    </React.Fragment>
  );
}

export default App;
