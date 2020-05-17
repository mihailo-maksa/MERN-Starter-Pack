import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import HttpsRedirect from "react-https-redirect";

ReactDOM.render(
  <React.StrictMode>
    <HttpsRedirect>
      <App />
    </HttpsRedirect>
  </React.StrictMode>,
  document.getElementById("root")
);

// Learn more about service workers and developing Progressive Web
// Apps (PWAs): https://bit.ly/CRA-PWA
serviceWorker.register();
