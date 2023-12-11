import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignUpPage from './src/pages/SignUpPage/SignUpPage';

// Mocking useNavigate and window.alert
const mockedNavigate = jest.fn();
window.alert = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedNavigate,
}));

// Setting up a global mock for fetch
global.fetch = jest.fn();

describe('SignUpPage Tests', () => {
  beforeEach(() => {
    fetch.mockClear();
    mockedNavigate.mockClear();
    window.alert.mockClear();
  });

  it('navigates to home on cancel', () => {
    const { getByText } = render(<SignUpPage />);
    fireEvent.click(getByText(/cancel/i)); // Replace with the actual text or identifier of your cancel button
    expect(mockedNavigate).toHaveBeenCalledWith('/');
  });

  // Test for user input
  it('updates fields on user input', () => {
    render(<SignUpPage />);
    fireEvent.change(screen.getByPlaceholderText(/email address/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/leetcode id/i), { target: { value: 'testleetcode' } });
    fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText("Confirm Password"), { target: { value: 'password123' } });

    expect(screen.getByPlaceholderText(/email address/i).value).toBe('test@example.com');
    expect(screen.getByPlaceholderText(/leetcode id/i).value).toBe('testleetcode');
    expect(screen.getByPlaceholderText("Password").value).toBe('password123');
    expect(screen.getByPlaceholderText("Confirm Password").value).toBe('password123');
  });

  // Test for form submission - Successful signup
  it('handles successful signup', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'User Successfully Created' }),
    });

    render(<SignUpPage />);
    // Fill the form fields and click the sign-up button
    // Add assertions to check successful behavior

  });

  // Test for form submission - Unsuccessful signup
  it('handles unsuccessful signup', async () => {
    fetch.mockResolvedValueOnce({ ok: false, status: 409 });
    render(<SignUpPage />);
    // Fill the form fields and click the sign-up button
    // Add assertions to check for failure behavior

  });

  // Test for invalid email
  it('alerts and resets form for invalid email', async () => {
    render(<SignUpPage />);
    fireEvent.change(screen.getByPlaceholderText("Email Address"), { target: { value: 'invalidemail' } });
    fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText("Confirm Password"), { target: { value: 'password123' } });
    fireEvent.click(screen.getByText("Sign Up"));

    await waitFor(() => {
        expect(window.alert).toHaveBeenCalledWith("Please enter valid email!");
    });
  });

  // Test for invalid LeetCode ID
  it('alerts and resets form for invalid Leetcode ID', async () => {
    render(<SignUpPage />);
    fireEvent.change(screen.getByPlaceholderText("Email Address"), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText("LeetCode ID"), { target: { value: null } });
    fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText("Confirm Password"), { target: { value: 'password123' } });
    fireEvent.click(screen.getByText("Sign Up"));

    await waitFor(() => {
        expect(window.alert).toHaveBeenCalledWith("Please enter valid LeetCode ID!");
    });
  });

  // Test for password mismatch
  it('alerts and resets form for password mismatch', async () => {
        render(<SignUpPage />);
        fireEvent.change(screen.getByPlaceholderText("Email Address"), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByPlaceholderText("LeetCode ID"), { target: { value: 'testleetcode' } });
        fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: 'password123' } });
        fireEvent.change(screen.getByPlaceholderText("Confirm Password"), { target: { value: 'password' } });
        fireEvent.click(screen.getByText("Sign Up"));
    
    await waitFor(() => {
        expect(window.alert).toHaveBeenCalledWith("Passwords do not match.");
    });
  });
    
    // User already exists
    it('alerts "User Already Exists" on second signup attempt', async () => {
        // Mock fetch for the first (successful) signup attempt
        fetch.mockResolvedValueOnce({
          ok: true,
          json: async () => ({ message: 'User Successfully Created' }),
        });
      
        // Mock fetch for the second (user already exists) signup attempt
        fetch.mockResolvedValueOnce({
          ok: false,
          status: 409,
          json: async () => ({ message: 'User Already Exists' }),
        });
      
        const { getByPlaceholderText, getByText } = render(<SignUpPage />);
      
        const fillAndSubmitForm = () => {
          fireEvent.change(getByPlaceholderText("Email Address"), { target: { value: 'yutinglu1031@outlook.com' } });
          fireEvent.change(getByPlaceholderText("LeetCode ID"), { target: { value: '1' } });
          fireEvent.change(getByPlaceholderText("Password"), { target: { value: 'password123' } });
          fireEvent.change(getByPlaceholderText("Confirm Password"), { target: { value: 'password123' } });
          fireEvent.click(getByText("Sign Up"));
        };
      
        fillAndSubmitForm();
      
        await waitFor(() => {
          expect(window.alert).toHaveBeenCalledWith("User Successfully Created");
        });
      
        fillAndSubmitForm();
      
        await waitFor(() => {
          expect(window.alert).toHaveBeenCalledWith("User Successfully Created");
        });
      });
});
