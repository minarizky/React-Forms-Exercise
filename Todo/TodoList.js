import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task) => {
    setTodos([...todos, { task, isCompleted: false }]);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleCompletion = (index) => {
    setTodos(todos.map((todo, i) =>
      i === index ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ));
  };

  const editTodo = (index, newTask) => {
    setTodos(todos.map((todo, i) =>
      i === index ? { ...todo, task: newTask } : todo
    ));
  };

  return (
    <div className="TodoList">
      <NewTodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo
          key={index}
          task={todo.task}
          isCompleted={todo.isCompleted}
          removeTodo={() => removeTodo(index)}
          toggleCompletion={() => toggleCompletion(index)}
          editTodo={(newTask) => editTodo(index, newTask)}
        />
      ))}
    </div>
  );
}

export default TodoList;
