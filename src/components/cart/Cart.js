import React, { Component } from "react";
import CartColumns from "./CartColumns";
import PageBanner from "components/PageBanner";
import { ProductConsumer } from "components/ProductContext";
class Cart extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          return (
            <section>
              <PageBanner bannerPage="Cart" bannerTitle="Your Cart" />

              <CartColumns />
            </section>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Cart;
