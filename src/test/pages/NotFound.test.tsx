import React from 'react';
import { render } from '@testing-library/react';
import { NotFound } from '../../pages/NotFound';

describe('NotFound', () => {
  test('renders "Page not found" text', () => {
    const { getByText } = render(<NotFound />);
    expect(getByText('Page not found')).toBeInTheDocument();
  });
});
