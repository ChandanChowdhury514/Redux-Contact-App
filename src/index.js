import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import contactReducer from './redux/reducers/contactReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux'


import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import "react-toastify/dist/ReactToastify.css";


const store = createStore(contactReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  

      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
    
);