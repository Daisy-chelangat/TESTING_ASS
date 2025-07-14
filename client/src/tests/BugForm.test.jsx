import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from '../components/BugForm.jsx';

test('renders bug form and submits data', () => {
  const mockAdd = jest.fn();
  render(<BugForm onAdd={mockAdd} />);

  const titleInput = screen.getByPlaceholderText('Bug title');
  const descriptionInput = screen.getByPlaceholderText('Description');
  const button = screen.getByText(/report bug/i);

  fireEvent.change(titleInput, { target: { value: 'Login error' } });
  fireEvent.change(descriptionInput, { target: { value: 'Crashes on submit' } });
  fireEvent.click(button);

  expect(mockAdd).toHaveBeenCalledWith({
    title: 'Login error',
    description: 'Crashes on submit',
  });
});
