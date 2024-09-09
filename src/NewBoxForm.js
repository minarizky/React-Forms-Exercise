import React, { useState } from 'react';
import './NewBoxForm.css';

function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState({
    width: '',
    height: '',
    backgroundColor: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData);
    setFormData({
      width: '',
      height: '',
      backgroundColor: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="NewBoxForm">
      <input
        type="text"
        name="width"
        value={formData.width}
        onChange={handleChange}
        placeholder="Width"
      />
      <input
        type="text"
        name="height"
        value={formData.height}
        onChange={handleChange}
        placeholder="Height"
      />
      <input
        type="text"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
        placeholder="Background Color"
      />
      <button type="submit">Add Box</button>
    </form>
  );
}

export default NewBoxForm;
