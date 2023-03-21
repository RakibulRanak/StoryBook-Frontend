import React from 'react';
import { render } from '@testing-library/react';
import { SignIn } from '../../pages/SignIn';

describe('SignIn', () => {
  test('renders This is SignIn page text', () => {
    const { getByText } = render(<SignIn />);
    expect(getByText('This is signIn page')).toBeInTheDocument();
  });
});
