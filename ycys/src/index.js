import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router
} from "react-router-dom"
import { Provider } from 'react-redux'
// import store from './store'
import 'zarm/dist/zarm.min.css';
// import { Button, Cell } from 'zarm';
import './assets/css/index.scss'
import "lib-flexible";
// import {
//   Provider
// } from "react-redux";
import store from "./store/index"
import axios from 'axios'
// import filters from './filters'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router forceRefresh>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
// axios.interceptors.request.use(config=>{
//   config.url = '/api'+config.url;
//   return config
// });
axios.interceptors.response.use(({ data }) => {
  return data;
})
React.Component.prototype.$axios = axios;
// React.Component.prototype.$filters = filters;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
