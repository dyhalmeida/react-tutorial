import React from 'react';
import './App.css';

import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Greet />
      <hr/>
      <Welcome />
      <hr/>
      <Hello />
    </div>
  );
}

export default App;
