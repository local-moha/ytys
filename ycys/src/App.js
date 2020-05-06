import React from 'react';
import Myrouter from './components/Myrouter'
import router from './router/index'
import axios from 'axios'
// axios.interceptors.request.use(config => {
//     console.log(config);
//     config.url = "/meisu" + config.url;
//     return config
// })
axios.interceptors.response.use(({ data }) => {
  // console.log(data);
  return data
})
React.Component.prototype.$axios = axios;

function App() {
  return (
    <div className="App">
      <Myrouter router={router}></Myrouter>
    </div>
  );
}

export default App;
