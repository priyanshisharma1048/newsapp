import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    // Destructuring assignment inside the render method
    const { title, description, imageUrl, newsurl, author, date,source } = this.props;

    return (
      <div className="my-3">
        <div className="card">
        <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger"style={{left:'90%',zIndex:'2'}}>{source}
                99+
                <span class="visually-hidden">unread messages</span>
              </span>
          {/* You might want to replace the placeholder image source */}
          <img
            src={
              !imageUrl
                ? "https://www.livemint.com/lm-img/img/2024/01/23/1600x900/Shooting-Illinois-0_1705974806910_1705974827228.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">
              {title}{" "}
              
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-danger">
                By {!author ? "Unknown" : author}on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>

            <a href={newsurl} target="_Main" className="btn btn-sm btn-dark">
              Readmore
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
