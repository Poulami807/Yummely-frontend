import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from "axios";

//Redux store
import store from './Redux/store';

if (localStorage.yummelyUser) {
  const { token } = JSON.parse(localStorage.yummelyUser);  //string -> JSON object
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;  //common header for every request made after receiving token
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
       <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
