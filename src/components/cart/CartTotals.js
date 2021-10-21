import React from "react";
class CartTotals extends React.Component {
  render() {
    const { subTotal, taxTotal, total, clearCart } = this.props.value;
    return (
      <div className="cartTotal">
        <div className="col-12 text-end">
          <div className="subTotal">Sub Total:{subTotal}</div>
          <div className="taxTotal"> Tax:{taxTotal}</div>
          <div className="fw-bold finalTotal">
            <strong>Total:{total}</strong>
          </div>
          <a className="btn btn-black btn-lg" onClick={() => clearCart()}>
            CLEAR CART
          </a>
        </div>
      </div>
    );
  }
}

export default CartTotals;
