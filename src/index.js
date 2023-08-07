import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <ToastContainer autoClose={3000} position={"bottom-right"} draggable/>
        <App />
      </React.StrictMode>
    </Provider>
  </Router>
);
