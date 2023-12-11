import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import GroupInfoPage from './src/pages/GroupInfoPage/GroupInfoPage';
import GroupCard from './src/components/GroupCard/GroupCard';
import InfoCard from './src/components/InfoCard/InfoCard';
import GroupDataDisplay from './src/components/GroupDataDisplay/GroupDataDisplay';

jest.mock('./src/components/GroupCard/GroupCard', () => (props) => <div data-testid="group-card" {...props} />);
jest.mock('./src/components/InfoCard/InfoCard', () => ({ title, children }) => <div data-testid="info-card" title={title}>{children}</div>);
jest.mock('./src/components/GroupDataDisplay/GroupDataDisplay', () => () => <div data-testid="group-data-display" />);

describe('GroupInfoPage', () => {
  const mockGroup = { _id: '1', groupName: 'Test Group' };
  const mockMembers = [{ _id: 'm1', leetcodeId: 'user1' }, { _id: 'm2', leetcodeId: 'user2' }];

  it('renders without crashing', () => {
    render(
      <Router>
        <GroupInfoPage />
      </Router>
    );
  });

});
