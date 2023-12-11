import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './src/App';

//Test the App component
// Mock fetch calls
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]), // Adjust this based on the expected response
  })
);

beforeEach(() => {
  fetch.mockClear();
  localStorage.clear();
});

it('renders HomePage by default', () => {
  render(<App />);
  expect(screen.getByText("Let's practice together!")).toBeInTheDocument();
});

it('navigates to LoginPage', async () => {
  render(<App />);
  fireEvent.click(screen.getByText(/Log In/i));
  await waitFor(() => {
    expect(screen.getByText("Email")).toBeInTheDocument();
  });
});