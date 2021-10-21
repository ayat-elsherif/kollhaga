import { ProductConsumer } from "components/ProductContext";
import React from "react";
import { Link } from "react-router-dom";
import CartSingleColumn from "./CartSingleColumn";
import CartTotals from "./CartTotals";
class CartColumns extends React.Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {(value) => {
            if (value.cart.length > 0) {
              return (
                <div className="section section-padding holder">
                  <div className="row">
                    <div className="col-12">
                      <div className="table-responsive">
                        <table className="show-table ">
                          <tbody>
                            {value.cart.map((item) => {
                              return (
                                <CartSingleColumn key={item.id} cart={item} />
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <CartTotals value={value} />
                </div>
              );
            } else {
              return (
                <div className="text-center mt-5">
                  <h2>YOUR CART IS EMPTY</h2>
                  <p>
                    You can add items <Link to="/">Here</Link>
                  </p>
                </div>
              );
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}

export default CartColumns;
