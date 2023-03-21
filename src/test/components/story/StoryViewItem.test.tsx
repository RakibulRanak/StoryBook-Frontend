import React from 'react';
import { render } from '@testing-library/react';
import { StoryViewItem } from '../../../components/story/StoryViewItem';


describe('StoryViewItem component', () => {
  test('renders the story with the correct title and author', () => {
    const { getByText } = render(<StoryViewItem id={1} />);
    expect(getByText("Pride and Prejudice")).toBeInTheDocument();
    expect(getByText("Jane Austen")).toBeInTheDocument();
  });

  test('renders an error message if the story is not found', () => {
    const { getByText } = render(<StoryViewItem id={999} />);
    expect(getByText('Story not found')).toBeInTheDocument();
  });
});