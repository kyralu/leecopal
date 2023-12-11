import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './src/components/Navbar/Navbar';

//Test the Navbar component
describe('Navbar component tests', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <Navbar leetcodeId="" onSignOut={() => {}} />
      </BrowserRouter>
    );
  });

  it('displays user-specific links when logged in', () => {
    const leetcodeId = '123';
    render(
      <BrowserRouter>
        <Navbar leetcodeId={leetcodeId} onSignOut={() => {}} />
      </BrowserRouter>
    );
  });

  it('calls onSignOut when the sign out button is clicked', () => {
    const mockSignOut = jest.fn();
    render(
      <BrowserRouter>
        <Navbar leetcodeId="123" onSignOut={mockSignOut} />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText(/sign out/i));
    expect(mockSignOut).toHaveBeenCalled();
  });
});
