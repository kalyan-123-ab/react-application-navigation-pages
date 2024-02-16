import React from "react";
import { NavLink } from "react-router-dom";
// import { useAuth } from "./auth";

function Navbar() {
  // const { user, logout } = useAuth();

  const navlinkStyles = { 
    textDecoration: "none", 
    fontWeight: "normal",
  };

  const activeNavlinkStyles = {
    textDecoration: "none",
    fontWeight: "bold",
  };

  return (
    <div>
      <nav className="primary-nav">
        <NavLink style={navlinkStyles} activeStyle={activeNavlinkStyles} exact to="/">
          Home
        </NavLink>
        <NavLink style={navlinkStyles} activeStyle={activeNavlinkStyles} to="/about">
          About
        </NavLink>
        <NavLink style={navlinkStyles} activeStyle={activeNavlinkStyles} to="/contact">
          Contact
        </NavLink>
        <NavLink style={navlinkStyles} activeStyle={activeNavlinkStyles} to="/projects">
          Projects
        </NavLink>
        {/* <NavLink style={navlinkStyles} activeStyle={activeNavlinkStyles} to="/users">
          Users
        </NavLink>
        {user ? (
          <NavLink
            style={navlinkStyles}
            activeStyle={activeNavlinkStyles}
            to="/logout"
            onClick={logout}
          >
            Logout
          </NavLink>
        ) : (
          <NavLink style={navlinkStyles} activeStyle={activeNavlinkStyles} to="/login">
            Login
          </NavLink>
        )} */}
      </nav>
    </div>
  );
}

export default Navbar;
