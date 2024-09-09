import { render, screen, fireEvent } from '@testing-library/react';
import Todo from './Todo';

test('renders Todo with task and buttons', () => {
  render(<Todo task="Test Task" isCompleted={false} removeTodo={() => {}} toggleCompletion={() => {}} editTodo={() => {}} />);
  const todoText = screen.getByText('Test Task');
  expect(todoText).toBeInTheDocument();
  const completeButton = screen.getByText('Complete');
  fireEvent.click(completeButton);
  expect(todoText).toHaveClass('completed');
});
