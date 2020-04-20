import React from 'react';

const EventHandling = () => {

  const handleClick = () => alert('Button Clicked');
  return (
    <button onClick={handleClick}>Click</button>
  );

}

export default EventHandling;