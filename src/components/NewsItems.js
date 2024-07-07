import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let { title, description, imageurl, newsurl, author, date } = this.props;
    return (
      <div>
        <div className="card">
          <img
            src={
              !imageurl
                ? "https://www.jagranimages.com/images/newimg/11102023/11_10_2023-rohit_sharma_hundred_23553614.webp"
                : imageurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsurl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark"
            >
              Read Full Article
            </a>
          </div>
        </div>
      </div>
    );
  }
}
