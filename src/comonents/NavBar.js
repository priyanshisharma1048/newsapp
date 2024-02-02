import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [category] = useState(props.category);

  const getCategoryColor = (category) => {
    switch (category) {
      case "business":
        return "text-success";
      case "entertainment":
        return "text-primary";
      case "general":
        return "text-warning";
      case "health":
        return "text-danger";
      case "science":
        return "text-info";
      case "sports":
        return "text-primary";
      case "technology":
        return "text-warning";
      default:
        return "text-light";
    }
  };

  return (
    <div>
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-dark bg-dark ${getCategoryColor(
          category
        )}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsMonkey
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link ${getCategoryColor("home")}`}
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${getCategoryColor("business")}`}
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${getCategoryColor("entertainment")}`}
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${getCategoryColor("general")}`}
                  to="/general"
                >
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${getCategoryColor("health")}`}
                  to="/health"
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${getCategoryColor("science")}`}
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${getCategoryColor("sports")}`}
                  to="/sports"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${getCategoryColor("technology")}`}
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
