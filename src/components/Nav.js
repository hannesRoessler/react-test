import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="navbar has-background-grey-lighter is-fixed-top">
        <div className="navbar-start">
          <p className="navbar-item ">
            <NavLink to="/" activeClassName="has-text-weight-bold">
              Home
            </NavLink>
          </p>{" "}
          <p className="navbar-item">
            {" "}
            <NavLink to="/items" activeClassName="has-text-weight-bold">
              Items
            </NavLink>
          </p>
          <p className="navbar-item">
            <NavLink to="/about" activeClassName="has-text-weight-bold">
              About
            </NavLink>
          </p>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <p className="subtitle is-5">
              <strong>React</strong> Playground
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Nav;

/*
 
*/
