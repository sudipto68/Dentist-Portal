import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar container navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  as={Link}
                  className="nav-link ms-5 active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  as={Link}
                  className="nav-link ms-5 active"
                  aria-current="page"
                  to="/"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-5" href="#">
                  Dental Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white ms-5" href="#">
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white ms-5" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white ms-5" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
