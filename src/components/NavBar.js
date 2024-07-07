import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
              <strong>News </strong>
            </Link>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="#">
                    <strong>Home</strong>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">
                    <strong>About</strong>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/General">
                    <strong>General</strong>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/Business">
                    <strong>Business</strong>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/Entertainment">
                    <strong>Entertainment</strong>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/Health">
                    <strong>Health</strong>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/Science">
                    <strong>Science</strong>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/Sports">
                    <strong>Sports</strong>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/Technology">
                    <strong>Technology</strong>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
