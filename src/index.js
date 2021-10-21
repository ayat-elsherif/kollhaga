import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ProductProvider } from "./components/ProductContext";
import { HashRouter as Router } from "react-router-dom";
ReactDOM.render(
  <ProductProvider>
    <Router>
      <App />
    </Router>
  </ProductProvider>,
  document.getElementById("root")
);
