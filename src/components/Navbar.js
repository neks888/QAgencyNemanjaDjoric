import React from "react";
import { NavLink } from "react-router-dom";
import useLogger from "./CustomHook";

const Navbar = ({ message, name }) => {
  useLogger(message, name);
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            className="link-home"
            to="/"
          >
            Back to home
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            className="link-posts"
            to="/posts"
          >
            Posts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
