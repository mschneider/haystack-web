import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Haystack title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Haystack/i);
  expect(linkElement).toBeInTheDocument();
});
