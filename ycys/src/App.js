import React from 'react';
import './App.css';
import Myrouter from './components/Myrouter'
import router from './router/index';
// import axios from "axios"
// import {
//   Route,
// } from 'react-router-dom'

// axios.interceptors.response.use(({ data }) => {
//   // console.log(data);
//   return data
// })
// React.Component.prototype.$axios = axios;



function App() {
    return ( 
        <div className = "App" >
            <Myrouter router={router}> </Myrouter> 
        </div >
    );
}

export default App;