// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders hello world text', () => {
//   render(<App />);
//   expect(screen.getByText(/hello/i)).toBeInTheDocument();
// });

// AppLayout.test.js
import { render, screen } from '@testing-library/react';
import AppLayout from './AppLayout';

test('renders header', () => {
  render(<AppLayout />);
  expect(screen.getByText(/header/i)).toBeInTheDocument();
});
