import React, { Component } from "react";
import { ProductConsumer } from "./ProductContext";
import SingleProduct from "./SingleProduct";
class Productlist extends Component {
  state = {};
  render() {
    return (
      <div className="section section-padding" id="Products">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-12">
              <div className="section-header text-center">
                <h3 className="section-title">Exclusive Shop</h3>
                <p className="section-subtext">
                  All What You Can Look For. A Various Set of The Latest
                  Released Phones / Handsets
                </p>
              </div>
            </div>
          </div>
          <div className="row products">
            <ProductConsumer>
              {value => {
                return value.products.map(product => {
                  return <SingleProduct product={product} key={product.id} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    );
  }
}

export default Productlist;
