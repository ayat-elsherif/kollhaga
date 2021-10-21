import React from "react";
import Slider from "react-slick";
class HomeSlider extends React.Component {
  settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: true,
    nextArrow: <span className="fa fa-angle-right"></span>,
    prevArrow: <span className="fa fa-angle-double-left"></span>,
  };
  render() {
    return (
      <div>
        <Slider {...this.settings} className="banner-slider">
          {/* <!-- Banner Slider --> */}
          <div className="banner-item banner-item-1">
            <div className="banner-content">
              <div className="container">
                <h3 className="banner-subtitle theme-color">New Music Album</h3>
                <h1 className="banner-title">Get the new songs</h1>
                <div className="button-group">
                  <a className="btn btn-border btn-lg btn-black" href="#">
                    Purchase Now
                  </a>
                  <a
                    className="btn btn-simple btn-lg play-video"
                    href="https://www.youtube.com/watch?v=5cY5PHE4x_g"
                  >
                    <i className="fa fa-play"></i> Watch Trailer
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="banner-item banner-item-2">
            <div className="banner-content text-white">
              <div className="container">
                <h3 className="banner-subtitle">New Music Album</h3>
                <h1 className="banner-title">Get the new songs</h1>
                <div className="button-group">
                  <a className="btn btn-border btn-lg btn-white" href="#">
                    Purchase Now
                  </a>
                  <a
                    className="btn btn-simple btn-lg btn-white play-video"
                    href="https://www.youtube.com/watch?v=5cY5PHE4x_g"
                  >
                    <i className="fa fa-play"></i> Watch Trailer
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className=" banner-item banner-item-3">
            <div className="banner-content">
              <div className="container text-center">
                <h3 className="banner-subtitle">New Music Album</h3>
                <h1 className="banner-title">Get the new songs</h1>
                <div className="button-group">
                  <a className="btn btn-border btn-lg btn-black" href="#">
                    Purchase Now
                  </a>
                  <a
                    className="btn btn-simple btn-lg play-video"
                    href="https://www.youtube.com/watch?v=5cY5PHE4x_g"
                  >
                    <i className="fa fa-play"></i> Watch Trailer
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Banner Slider End --> */}
        </Slider>
      </div>
    );
  }
}

export default HomeSlider;
