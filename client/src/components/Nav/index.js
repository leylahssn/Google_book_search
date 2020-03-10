import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link
            to="/"
            className={
              window.location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Google Books
          </Link>
          <Link
            to="/search"
            className={
              window.location.pathname === "/search"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Search
          </Link>
          <Link
            to="/saved"
            className={
              window.location.pathname === "/saved"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Saved
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
