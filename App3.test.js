import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginPage from './src/pages/LoginPage/LoginPage';

// Mocking useNavigate
const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedNavigate,
}));

// Setting up a global mock for fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ leetcodeId: '123', id: 'abc' }) // Adjust based on expected response
  })
);
window.alert = jest.fn(); // Mocking window.alert

describe('LoginPage Tests', () => {
  beforeEach(() => {
    // Reset mocks before each test
    global.fetch.mockClear();
    mockedNavigate.mockClear();
  });

  it('updates email and password fields on user input', () => {
    render(<LoginPage onLoggedIn={jest.fn()} />);
    fireEvent.change(screen.getByPlaceholderText(/email address/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'password123' } });
    expect(screen.getByPlaceholderText(/email address/i).value).toBe('test@example.com');
    expect(screen.getByPlaceholderText(/password/i).value).toBe('password123');
  });

  it('navigates to home on cancel', () => {
    render(<LoginPage onLoggedIn={jest.fn()} />);
    fireEvent.click(screen.getByText(/cancel/i));
    expect(mockedNavigate).toHaveBeenCalledWith('/');
  });
  
  // Successful login attempt
  it('handles successful login', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ leetcodeId: '123', id: 'abc' }),
    });
    const mockOnLoggedIn = jest.fn();
    render(<LoginPage onLoggedIn={mockOnLoggedIn} />);

    fireEvent.change(screen.getByPlaceholderText(/email address/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'password123' } });
    fireEvent.click(screen.getByText(/login/i));

    await waitFor(() => {
      expect(mockOnLoggedIn).toHaveBeenCalledWith('123', 'abc');
      expect(mockedNavigate).toHaveBeenCalledWith('/group');
    });
  });

  // Unsuccessful login attempt
  it('handles unsuccessful login', async () => {
    fetch.mockResolvedValueOnce({ ok: false });
    render(<LoginPage onLoggedIn={jest.fn()} />);

    fireEvent.change(screen.getByPlaceholderText(/email address/i), { target: { value: 'wrong@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'wrongpass' } });
    fireEvent.click(screen.getByText(/login/i));

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith('Email/Password Incorrect');
      expect(mockedNavigate).not.toHaveBeenCalledWith('/group');
    });
  });

});
