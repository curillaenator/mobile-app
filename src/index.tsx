import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom"; //BrowserRouter

import { App } from "./app/App";

import { store } from "./redux/store";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
