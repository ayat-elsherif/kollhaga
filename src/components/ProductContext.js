import React from "react";
import { storeProducts, detailProduct } from "../data";

const ProductContext = React.createContext();

class ProductProvider extends React.Component {
  state = {
    products: [],
    details: detailProduct,
    cart: [],
    modalProduct: detailProduct,
    modalOpen: false,
    increment: 0,
    decrement: 0,
    subTotal: 0,
    taxTotal: 0,
    total: 0,
  };
  componentDidMount() {
    this.setState(() => {
      return { products: this.getItemsFromProducts() };
    });
  }

  getSingleItem = (id) => {
    return this.state.products.find((Product) => Product.id === id);
  };
  handleDetails = (id) => {
    const product = this.getSingleItem(id);
    this.setState(() => {
      return { details: product };
    });
  };
  addToCart = (id) => {
    const tempProd = [...this.state.products];
    const index = tempProd.indexOf(this.getSingleItem(id));
    const product = tempProd[index];
    product.inCart = true;
    product.count = 1;
    product.total = product.price;
    this.setState(
      () => {
        return { products: tempProd, cart: [...this.state.cart, product] };
      },
      () => this.calcTotal(id)
    );
  };

  getItemsFromProducts = () => {
    let products = [];
    storeProducts.forEach((item) => {
      const product = { ...item };
      products = [...products, product];
    });
    // console.log(products, "getItemsFromProducts");
    return products;
  };
  openModal = (id) => {
    const product = this.getSingleItem(id);
    // console.log(product, "open Modal");
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  clickOnCart = (id) => {
    this.addToCart(id);
    this.handleDetails(id);
    this.openModal(id);
  };
  toIncrement = (id) => {
    const newCart = [...this.state.cart];
    const index = newCart.indexOf(this.getSingleItem(id));
    const product = newCart[index];
    product.total += product.price;
    product.count++;
    this.setState(
      () => {
        return { cart: [...newCart] };
      },
      () => this.calcTotal()
    );
  };
  toDecrement = (id) => {
    const tempCart = [...this.state.cart];
    const index = tempCart.indexOf(this.getSingleItem(id));
    const product = tempCart[index];

    if (product.count > 1) {
      product.total -= product.price;
      product.count--;
    } else {
      product.total = product.price;
      product.count = 1;
    }
    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => this.calcTotal()
    );
  };
  removeItem = (id) => {
    const products = [...this.state.products];
    let index = products.indexOf(this.getSingleItem(id));
    const product = products[index];
    product.inCart = false;
    product.count = 0;
    product.total = 0;
    console.log(this.state.cart, product.id);
    const restCart = this.state.cart.filter((item) => item.id != product.id);
    this.setState(
      () => {
        return {
          cart: restCart,
          products: [...products],
        };
      },
      () => {
        this.calcTotal();
      }
    );
  };
  clearCart = () => {
    this.setState(
      () => {
        return {
          cart: [],
          products: this.getItemsFromProducts(),
        };
      },
      () => {
        this.calcTotal();
      }
    );

    // console.log(this.getItemsFromProducts(), "clear cart");
  };
  calcTotal = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const totalTax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + totalTax;
    this.setState(() => {
      return { subTotal: subTotal, taxTotal: totalTax, total: total };
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetails: this.handleDetails,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          clickOnCart: this.clickOnCart,
          increment: this.toIncrement,
          decrement: this.toDecrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
