import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../sass/apps.css";
import "../sass/style.scss";
import "../sass/responsive.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cart from "./cart/Cart";
import Details from "./Details";
import Header from "./Header";
import DefaultPage from "./DefaultPage";
// import DefaultPage from "./DefaultPage";
import { Route } from "react-router-dom";
import HomeSlider from "./HomeSlider";
import ProductList from "./ProductList";
import Modal from "./Modal";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div>
          {/* <Switch> */}
          <Route exact path="/">
            <HomeSlider />
            <ProductList />
          </Route>
          <Route path="/products" component={ProductList} />
          <Route path="/store" component={Cart} />
          <Route path="/details/:id" component={Details} />
          {/* <Route component={DefaultPage} />
          </Switch> */}
        </div>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
