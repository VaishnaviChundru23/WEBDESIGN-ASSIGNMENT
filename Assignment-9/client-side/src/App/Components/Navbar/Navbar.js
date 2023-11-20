import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import logo from "../../Images/logo.png"

const Navbar = () => {
  return (
    <div className="navMain">
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo"/>
        {/* <h1>Assignment 9</h1> */}
        <ul className="links">
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Jobs">Jobs</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
