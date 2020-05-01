import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router
} from "react-router-dom"
import 'zarm/dist/zarm.min.css';
// import { Button, Cell } from 'zarm';
import './assets/css/common.scss'
import "lib-flexible";
import axios from 'axios'
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
axios.interceptors.request.use(config=>{
  config.url = '/api'+config.url;
  return config
});
axios.interceptors.response.use(({data})=>{
  return data;
})
React.Component.prototype.$axios = axios;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
