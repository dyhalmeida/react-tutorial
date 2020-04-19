import React from 'react';

const Hello = () => {

  /**
   
    return (
      <div>
        <h1>Hello JSX</h1>
      </div>
    );

    O código acim com JSX é o mesmo que o código abaixo
    utlizando o React.createElement
    
   */
  return React.createElement(
    'div', 
    null, 
    React.createElement(
      'h1', 
      null, 
      'Hello JSX with React.createElement'
    )
  );
}

export default Hello;