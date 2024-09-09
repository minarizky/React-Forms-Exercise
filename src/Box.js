import React from 'react';
import './Box.css';  // Ensure this path is correct

function Box({ color, width, height, removeBox }) {
  return (
    <div 
      className="Box" 
      style={{ backgroundColor: color, width: width, height: height }}
    >
      <button onClick={removeBox}>X</button>
    </div>
  );
}

export default Box;
