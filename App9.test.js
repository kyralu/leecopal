import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import GroupList from './src/components/GroupList/GroupList';
import GroupCard from './src/components/GroupCard/GroupCard';

jest.mock('./src/components/GroupCard/GroupCard');

describe('GroupList', () => {
  const mockGroups = [
    { _id: '1', groupName: 'Group 1' },
    { _id: '2', groupName: 'Group 2' },
  ];

  beforeEach(() => {
    GroupCard.mockImplementation(({ group }) => (
      <div data-testid="group-card" key={group._id}>{group.groupName}</div>
    ));
  });

  it('renders a list of group cards', () => {
    const { getAllByTestId } = render(<GroupList groups={mockGroups} />);
    
    const groupCards = getAllByTestId('group-card');
    expect(groupCards.length).toBe(mockGroups.length);
    
    mockGroups.forEach((group, index) => {
      expect(groupCards[index]).toHaveTextContent(group.groupName);
    });
  });
});
