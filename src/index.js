import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import Store from "./App/Store";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);
