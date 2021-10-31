import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "./ProductContext";
class SingleProduct extends React.Component {
  render() {
    const { id, title, price, company, info, inCart, count, img } =
      this.props.product;
    return (
      // <!-- Music Shop -->
      <ProductConsumer>
        {value => {
          return (
            <div className="col-lg-3 col-sm-4 col-12">
              <div className="product">
                <div className="product-thumb">
                  <Link
                    to={"details/" + id}
                    onClick={() => value.handleDetails(id)}
                  >
                    <img className="img-responsive" src={img} alt={title} />
                  </Link>
                  <div className="product-thumb-hover">
                    <button
                      className="btn btn-white"
                      onClick={() => {
                        value.clickOnCart(id);
                      }}
                      disabled={inCart ? true : false}
                    >
                      {inCart ? (
                        "Added"
                      ) : (
                        <span>
                          <i className="fas fa-cart-plus"></i> Add to Cart
                        </span>
                      )}
                    </button>
                  </div>
                </div>
                <div className="product-detail d-flex justify-content-around">
                  <h4 className="product-name">
                    <a href="#">{title}</a>
                    <div>
                      <small className="text-muted"> {company}</small>
                    </div>
                  </h4>
                  <p className="product-price">
                    {price}
                    <sup className="text-muted">
                      <small>EGP</small>
                    </sup>
                  </p>
                </div>
              </div>
            </div>
          );
        }}
        {/* // <!-- Music Shop End --> */}
      </ProductConsumer>
    );
  }
}

export default SingleProduct;
