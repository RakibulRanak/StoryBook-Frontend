import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { StoryView } from '../../pages/StoryView';

describe('StoryView', () => {
  it('should display the correct story', () => {
    // Set up the test route with a :id parameter
    render(
      <MemoryRouter initialEntries={[`/stories/1`]}>
       <Routes>
          <Route path="/stories/:id" element={<StoryView />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText("The Adventures of Sherlock Holmes")).toBeInTheDocument();
  });
});
