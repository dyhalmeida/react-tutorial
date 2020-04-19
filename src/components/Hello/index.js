import React from 'react';

const Hello = () => {
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