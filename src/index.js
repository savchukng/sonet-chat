import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app/app.js";
import SonetService from "./services/sonet-service";
import { SonetServiceProvider } from "./components/sonet-service-context/sonet-service";

import store from "./store";
import "./stars.scss";

const sonetService = new SonetService();

ReactDom.render(
  <div className="stars">
    <div className="twinkling">
      <Provider store={store}>
        <SonetServiceProvider value={sonetService}>
          <Router>
            <App />
          </Router>
        </SonetServiceProvider>
      </Provider>
    </div>
  </div>,
  document.getElementById("root")
);
