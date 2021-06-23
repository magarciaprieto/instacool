import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

test('renders learn react link', () => {
  render(<App history={history} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
