import React from 'react';
import { render } from '@testing-library/react';
import GroupDataDisplay from './src/components/GroupDataDisplay/GroupDataDisplay';
import Chart from 'chart.js/auto';

jest.mock('chart.js/auto');

describe('GroupDataDisplay', () => {
    beforeEach(() => {
        Chart.mockImplementation(() => ({
            data: { datasets: [] },
            update: jest.fn(),
        }));
        
        global.window.combinedChart = {
            data: { datasets: [] },
            update: jest.fn(),
        };
    });

    it('renders without crashing', () => {
    render(<GroupDataDisplay />);
    });

    it('renders information for each mock user', () => {
    const { getByText } = render(<GroupDataDisplay />);

    mockUsers.forEach(user => {
        expect(getByText(user.leetcodeId)).toBeInTheDocument();
    });
    });

    it('initializes charts for mockUsers', () => {
    render(<GroupDataDisplay />);
    expect(Chart.mock.calls.length).toBe(mockUsers.length);
    });

});
