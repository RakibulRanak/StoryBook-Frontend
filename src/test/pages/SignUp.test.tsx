import React from 'react';
import { render } from '@testing-library/react';
import { SignUp } from '../../pages/SignUp';

describe('SignUp', () => {
  test('renders This is SignUp page text', () => {
    const { getByText } = render(<SignUp />);
    expect(getByText('This is SignUp page')).toBeInTheDocument();
  });
});
