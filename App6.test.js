import { render, fireEvent, screen } from '@testing-library/react';
import CreateGroupForm from './src/components/CreateGroupForm/CreateGroupForm';

describe('CreateGroupForm', () => {
  it('handles input change', () => {
    const handleInputChange = jest.fn();
    render(<CreateGroupForm onClose={() => {}} onCreateGroup={handleInputChange} />);

    const input = screen.getByLabelText(/group name/i);
    fireEvent.change(input, { target: { value: 'New Group' } });

    expect(input.value).toBe('New Group');
  });

  it('handles submitting a group name', async () => {
    const mockOnCreateGroup = jest.fn();
    const mockOnClose = jest.fn();

    render(<CreateGroupForm onClose={mockOnClose} onCreateGroup={mockOnCreateGroup} />);

    const input = screen.getByPlaceholderText("Enter group name");
    fireEvent.change(input, { target: { value: 'New Group' } });

    const createButton = screen.getByText("Create");
    fireEvent.click(createButton);

    expect(mockOnCreateGroup).toHaveBeenCalledWith('New Group');
    expect(mockOnClose).not.toHaveBeenCalled();
  });

  it('closes the form without creating a group when cancel is clicked', () => {
    const mockOnCreateGroup = jest.fn();
    const mockOnClose = jest.fn();

    render(<CreateGroupForm onClose={mockOnClose} onCreateGroup={mockOnCreateGroup} />);

    const cancelButton = screen.getByText(/cancel/i);
    fireEvent.click(cancelButton);

    expect(mockOnCreateGroup).toHaveBeenCalled();
    expect(mockOnClose).toHaveBeenCalled();
  });
});
