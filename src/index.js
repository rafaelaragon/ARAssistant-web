import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
import App from "./controllers/App/App";
import * as serviceWorker from "./services/serviceWorker";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.register();
