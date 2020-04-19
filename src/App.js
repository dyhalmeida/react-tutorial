import React from 'react';
import './App.css';

import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet />
      <hr/>
      <Welcome />
    </div>
  );
}

export default App;
