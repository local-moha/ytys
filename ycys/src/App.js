import React from 'react';
import './App.css';
import Myrouter from './components/Myrouter'
import router from './router/index'




function App() {
  console.log("APP",router)
  return (
    <div className="App">
    {/* app */}
      <Myrouter router={router}></Myrouter>
      
    </div>
  );
}

export default App;
