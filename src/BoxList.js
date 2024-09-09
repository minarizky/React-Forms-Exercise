import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './BoxList.css'; // Optional: If you have specific styles for BoxList

/** 
 * BoxList component
 * 
 * Manages the list of boxes and renders NewBoxForm and Box components
 */
function BoxList() {
  const [boxes, setBoxes] = useState([]);

  /** Adds a new box to the list */
  const addBox = (newBox) => {
    setBoxes((prevBoxes) => [...prevBoxes, newBox]);
  };

  /** Removes a box from the list based on its index */
  const removeBox = (index) => {
    setBoxes((prevBoxes) => prevBoxes.filter((_, i) => i !== index));
  };

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      <div className="BoxList-container">
        {boxes.map((box, index) => (
          <Box
            key={index}
            backgroundColor={box.backgroundColor}
            width={box.width}
            height={box.height}
            removeBox={() => removeBox(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default BoxList;

