import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import InfoCard from './src/components/InfoCard/InfoCard';

describe('InfoCard', () => {
  it('renders the title when provided', () => {
    const title = 'Test Title';
    render(<InfoCard title={title}>Test Content</InfoCard>);

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  it('does not render a title when none is provided', () => {
    render(<InfoCard>Test Content</InfoCard>);

    const titleElement = screen.queryByRole('heading', { level: 3 });
    expect(titleElement).not.toBeInTheDocument();
  });

  it('renders the children content', () => {
    const childrenContent = 'Test Content';
    render(<InfoCard title="Test Title">{childrenContent}</InfoCard>);

    const childrenElement = screen.getByText(childrenContent);
    expect(childrenElement).toBeInTheDocument();
  });
});
