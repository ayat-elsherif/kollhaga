import { ProductConsumer } from "components/ProductContext";
import React from "react";
class CartSingleColumn extends React.Component {
  render() {
    const { cart } = this.props;
    const { id, img, title, price, count, total } = cart;
    return (
      <ProductConsumer>
        {(value) => {
          return (
            <tr>
              <td className="show-type">
                <span className="img">
                  <img src={"/" + img} alt={title} style={{ width: "80px" }} />
                </span>
                <span className="title">{title}</span>
              </td>

              <td className="show-price">
                <span className="name">
                  <strong>Price:</strong> ${price}
                </span>
              </td>
              <td className="show-counter">
                <span
                  className="decrementItem"
                  onClick={() => value.decrement(id)}
                >
                  -
                </span>
                <span className="itemNumber"> {count}</span>
                <span
                  className="incrementItem"
                  onClick={() => value.increment(id)}
                >
                  +
                </span>
              </td>

              <td className="show-total" title="Total">
                <strong>Total:</strong> ${total}
              </td>
              <td className="show-ticket">
                <a
                  className="btn btn-border btn-black"
                  onClick={() => value.removeItem(id)}
                >
                  Delete
                </a>
              </td>
            </tr>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default CartSingleColumn;
