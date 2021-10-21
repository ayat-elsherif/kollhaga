import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ProductProvider } from "./components/ProductContext";

ReactDOM.render(
  <ProductProvider>
    <App />
  </ProductProvider>,
  document.getElementById("root")
);
