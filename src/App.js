import React from 'react';
import './App.css';

import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
     <Welcome firstname="Diego" lastname="Almeida"/>
     <hr/>
     <Welcome firstname="Laura" lastname="Anghel">
       <button>Options</button>
     </Welcome>
    </div>
  );
}

export default App;
