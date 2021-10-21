import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProductConsumer } from "./ProductContext";
import PageBanner from "./PageBanner";
class Details extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div className="main-wrap">
        {/* <!-- About Album --> */}
        <ProductConsumer>
          {(value) => {
            // const varDetail = value.products.find((product) => {
            //   return product.id === this.props.match.params.id;
            // });
            // value.details = { ...varDetail };
            console.log(value.details, "details page");
            const { id, title, img, info, company, price, inCart } =
              value.details;
            return (
              <React.Fragment>
                <PageBanner bannerPage="Details" bannerTitle={title} />
                <div className="section album-info-section section-padding">
                  <div className="holder">
                    <Row>
                      <Col lg={6}>
                        <div className="album-image">
                          <img
                            className="img-responsive"
                            src={"/" + img}
                            alt={title}
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="about-album">
                          <h2 className="album-name">{title}</h2>
                          <small>{company}</small>
                          <p>{info}</p>

                          <div className="d-flex justify-content-between align-items-end pt-5">
                            <div className="text-center">
                              <p className="price">price: ${price}</p>
                              <button
                                className="btn btn-black"
                                onClick={() => value.addToCart(id)}
                                disabled={inCart ? true : false}
                              >
                                {inCart ? (
                                  "added"
                                ) : (
                                  <span>
                                    <i className="fas fa-cart-plus"></i> Add To
                                    Cart
                                  </span>
                                )}
                              </button>
                            </div>
                            <Link to="/" className="text-decoration-underline">
                              Back to Products
                            </Link>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </React.Fragment>
            );
          }}
        </ProductConsumer>

        {/* <!-- About Album End --> */}
      </div>
    );
  }
}

export default Details;
