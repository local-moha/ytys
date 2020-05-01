import React from 'react';
import Myrouter from './components/Myrouter'
import router from './router/index'


function App() {
  return (
    <div className="App">
      <Myrouter router={router}></Myrouter>
    </div>
  );
}

export default App;
