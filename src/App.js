import React from 'react';
import './App.css';

import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Hello name="Diego">
        <p>Programador Javascript</p>
      </Hello>
      <hr/>
      <Hello name="Laura" />
    </div>
  );
}

export default App;
