import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'
import setupAxios from './utils/setupAxios'
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

// setup axios interceptor
setupAxios(axios)

ReactDOM.render(
 
  <React.StrictMode>
     <BrowserRouter  history={history}>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();