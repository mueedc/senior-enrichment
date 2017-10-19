import React from "react";
import { withRouter, Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = () => (
  <nav className="navbar navbar-default">
    <span id='campuses'>
      <NavLink to="/campus" activeClassName="active">
        <button type='campus-btn'>Home</button>
      </NavLink>
    </span>
    <span id='students'>
      <NavLink to="/student" activeClassName="active">
        <button type='student-btn'>Students</button>
      </NavLink>
      </span>
  </nav>
);

export default connect()(Navbar);
