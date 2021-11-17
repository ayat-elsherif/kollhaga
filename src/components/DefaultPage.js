import React, { Component } from "react";

class DefaultPage extends Component {
  state = {};
  render() {
    return (
      <div className="section-404">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div class="section section-padding">
                <div class="container text-center">
                  <div class="img-404">
                    <img
                      class="img-responsive"
                      src="/assets/images/custom/404.png"
                      alt="Content not found"
                    />
                  </div>
                  <div className="title-404">
                    <h2 className="mb-4">Somthing Went Wrong..</h2>

                    <h4>
                      It seems like you have reached to the no where page!!
                    </h4>
                  </div>
                  <form
                    class="searchform"
                    action="#"
                    method="post"
                    onSubmit={e => e.preventDefault()}
                  >
                    <input
                      type="search"
                      name="s"
                      placeholder="Type here to search..."
                    />
                    <button type="submit" name="searchsubmit">
                      <i class="fa fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="not-found col-md-5 text-center">
              <img src="/img/404/sad-phone.png" alt="the page is not found" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DefaultPage;
