import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  render(<App />);
});

it('renders Navbar component', () => {
  const { getByTestId } = render(<App />);
  const navbar = getByTestId('navbar');
  expect(navbar).toBeInTheDocument();
});

it('navigates to LoginPage when Login link is clicked', async () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText(/login/i));
  await waitFor(() => {
    expect(getByText(/login page/i)).toBeInTheDocument();
  });
});

it('navigates to SignUpPage when Sign Up link is clicked', async () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText(/sign up/i));
  await waitFor(() => {
    expect(getByText(/sign up page/i)).toBeInTheDocument();
  });
});
