import React, { useState } from 'react';
import './NewTodoForm.css';

function NewTodoForm({ addTodo }) {
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="NewTodoForm">
      <input
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="New Todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default NewTodoForm;
