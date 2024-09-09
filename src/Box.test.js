import { render, screen, fireEvent } from '@testing-library/react';
import Box from './Box';

test('renders Box with correct styles and button', () => {
  render(<Box width="100px" height="100px" backgroundColor="blue" removeBox={() => {}} />);
  const boxElement = screen.getByRole('button');
  expect(boxElement).toHaveStyle('width: 100px');
  expect(boxElement).toHaveStyle('height: 100px');
  expect(boxElement).toHaveStyle('background-color: blue');
});
