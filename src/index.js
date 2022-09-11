import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//import Router
import { BrowserRouter } from "react-router-dom";

//import House Context Provider
import HouseContextProvider from "./context/HouseContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HouseContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </HouseContextProvider>
);
