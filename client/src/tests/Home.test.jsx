import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '../pages/Home';
import * as api from '../api/bugAPI';

jest.mock('../api/bugAPI');

test('displays bugs fetched from API', async () => {
  api.fetchBugs.mockResolvedValue([
    { _id: '1', title: 'Bug 1', status: 'Open' },
    { _id: '2', title: 'Bug 2', status: 'Closed' },
  ]);

  render(<Home />);

  await waitFor(() => {
    expect(screen.getByText('Bug 1')).toBeInTheDocument();
    expect(screen.getByText('Bug 2')).toBeInTheDocument();
  });
});
