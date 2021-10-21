import React, { Component } from "react";
import { Link } from "react-router-dom";

class PageBanner extends Component {
  render() {
    return (
      // <!-- Page Header -->
      <div className="page-header">
        <div className="container text-center">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-center">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {this.props.bannerPage}
              </li>
            </ol>
          </nav>
          <h1 className="page-title">{this.props.bannerTitle}</h1>
        </div>
      </div>
      // <!-- Page Header End -->
    );
  }
}

export default PageBanner;
