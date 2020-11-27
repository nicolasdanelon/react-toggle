import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Toggle from './index';

test('renders greeting text', () => {
  render(<Toggle />);
  const theDiv = screen.getByText(/hi!/i);
  expect(theDiv).toBeInTheDocument();
});
