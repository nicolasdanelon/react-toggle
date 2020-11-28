import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Toggle from './index';

test('renders greeting text', () => {
  render(<Toggle />);
  const theDiv = screen.getByText(/hello there!/i);
  expect(theDiv).toBeInTheDocument();
});
