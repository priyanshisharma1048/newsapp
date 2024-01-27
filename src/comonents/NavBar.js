import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  getCategoryColor = (category) => {
    switch (category) {
      
      case 'business':
        return 'text-success'; // Replace with your desired color class for business
      case 'entertainment':
        return 'text-primary'; // Replace with your desired color class for entertainment
      case 'general':
        return 'text-warning'; // Replace with your desired color class for general
      case 'health':
        return 'text-danger'; // Replace with your desired color class for health
      case 'science':
        return 'text-info'; // Replace with your desired color class for science
      case 'sports':
        return 'text-primary'; // Replace with your desired color class for sports
      case 'technology':
        return 'text-warning'; // Replace with your desired color class for technology
      default:
        return 'text-light'; // Default color for unknown category
    }
  };

  render() {
    const { category } = this.props;

    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${this.getCategoryColor(category)}`}>
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
                {/* Add your category links with dynamic styling */}
                <li className="nav-item">
                  <a className={`nav-link ${this.getCategoryColor('home')}`} aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${this.getCategoryColor('business')}`} to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${this.getCategoryColor('entertainment')}`} to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${this.getCategoryColor('general')}`} to="/general">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${this.getCategoryColor('health')}`} to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${this.getCategoryColor('science')}`} to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${this.getCategoryColor('sports')}`} to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${this.getCategoryColor('technology')}`} to="/technology">
                    Technology
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

export default NavBar;
