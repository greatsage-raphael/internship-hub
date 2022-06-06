import React from "react";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Navbar = ({ user }) => {
  const logout = () => {
    window.open("https://internship-hub-backend.herokuapp.com/auth/logout", "_self"); 
  };
  return (
    <div className="navbar">
      <span className="logo app-name">
        <Link className="link" to="/">
          Internship Hub
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img src={user.photos[0].value} alt="avatar" className="avatar" />
          </li>
          <li className="listItem">{user.displayName}</li>
          <li className="listItem" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <Link className="link" to="login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
