import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from '../../../components/generic/Navbar';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar', () => {
    it('should render the app name', () => {
        render(<BrowserRouter><Navbar /></BrowserRouter>);
        expect(screen.getByText('StoryHub')).toBeInTheDocument();
    });

    it('should show logout button when logged in', () => {
        render(<BrowserRouter><Navbar /></BrowserRouter>);
        expect(screen.getByRole('button', { name: /logout/i })).toBeInTheDocument();
    });

    it('should show login button when logged out', () => {
        render(<BrowserRouter><Navbar /></BrowserRouter>);
        fireEvent.click(screen.getByRole('button', { name: /logout/i }));
        expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    });

    // it('should navigate to home page on app name click', () => {
    //     const { container } = render(<BrowserRouter><Navbar /></BrowserRouter>);
    //     console.log(screen.getByText('StoryHub').childNodes)
    //     fireEvent.click(screen.getByText('StoryHub'));
    //     console.log(container.firstChild)
    //     expect(container.firstChild).toHaveAttribute('href', '/');
    // });

    // it('should navigate to login page on login button click', () => {
    //     const { container } = render(<BrowserRouter><Navbar /></BrowserRouter>);
    //     fireEvent.click(screen.getByRole('button', { name: /login/i }));
    //     expect(container.firstChild).toHaveAttribute('href', '/signin');
    // });

});
