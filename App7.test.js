import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import GroupCard from './src/components/GroupCard/GroupCard';
import '@testing-library/jest-dom';

describe('GroupCard', () => {
  const mockGroup = {
    _id: 'group1',
    groupName: 'Test Group',
    groupMembers: ['member1', 'member2'],
    groupIcon: '🚀',
  };

  it('displays group information', () => {
    render(
      <Router>
        <GroupCard group={mockGroup} showEnter={true} hasJoined={false} />
      </Router>
    );

    expect(screen.getByText('Test Group')).toBeInTheDocument();
    expect(screen.getByText('🚀')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('navigates to the correct URL on "Enter" button click', () => {
    const navigate = jest.fn();
    render(
      <Router>
        <GroupCard group={mockGroup} showEnter={true} hasJoined={false} onJoinGroup={() => {}} />
      </Router>
    );

    const enterButton = screen.getByText('Enter');
    fireEvent.click(enterButton);
  });

  it('calls onJoinGroup on "Join" button click', () => {
    const mockOnJoinGroup = jest.fn();

    render(
      <Router>
        <GroupCard group={mockGroup} showEnter={false} hasJoined={false} onJoinGroup={mockOnJoinGroup} />
      </Router>
    );

    const joinButton = screen.getByText('Join');
    fireEvent.click(joinButton);

    expect(mockOnJoinGroup).toHaveBeenCalledWith('group1');
  });
});
