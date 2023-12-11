import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import GroupPage from './src/pages/GroupPage/GroupPage';
import GroupList from './src/components/GroupList/GroupList';
import CreateGroupForm from './src/components/CreateGroupForm/CreateGroupForm';

jest.mock('./src/components/GroupList/GroupList', () => jest.fn().mockReturnValue(null));
jest.mock('./src/components/CreateGroupForm/CreateGroupForm', () => jest.fn().mockReturnValue(null));

describe('GroupPage', () => {
  const mockGroups = [
    { _id: '1', groupMembers: ['user1'] },
    { _id: '2', groupMembers: ['user2'] },
    // ... more mock groups ...
  ];
  const userId = 'user1';

  beforeEach(() => {
    GroupList.mockClear();
    CreateGroupForm.mockClear();
  });

  it('renders without crashing', () => {
    render(<GroupPage groups={mockGroups} id={userId} />);
  });

  it('renders GroupList with correct groups based on selected filter', () => {
    render(<GroupPage groups={mockGroups} id={userId} />);
    const joinedGroupsButton = screen.getByText('Joined Groups');
    fireEvent.click(joinedGroupsButton);

    expect(GroupList).toHaveBeenCalledWith(
      expect.objectContaining({ groups: expect.arrayContaining([mockGroups[0]]) }),
      expect.anything()
    );

    const moreGroupsButton = screen.getByText('More Groups');
    fireEvent.click(moreGroupsButton);

    expect(GroupList).toHaveBeenCalledWith(
      expect.objectContaining({ groups: expect.arrayContaining([mockGroups[1]]) }),
      expect.anything()
    );
  });

  it('toggles CreateGroupForm visibility on button click', () => {
    render(<GroupPage groups={mockGroups} id={userId} />);
    const createGroupButton = screen.getByText('+ New Group');
    
    fireEvent.click(createGroupButton);
    expect(CreateGroupForm).toHaveBeenCalled();
  
    fireEvent.click(createGroupButton);

    expect(CreateGroupForm).toHaveBeenCalledTimes(1);
  });
  
});
