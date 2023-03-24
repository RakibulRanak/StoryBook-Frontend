import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from '../../../components/generic/Navbar';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar', () => {
    const setupTest = (): void => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter >
        )
    }

    test('should render the app name', () => {
        setupTest();
        expect(screen.getByText('StoryHub')).toBeInTheDocument();
    });

    test('should show logout button when logged in', () => {
        setupTest();
        expect(screen.getByRole('button', { name: /logout/i })).toBeInTheDocument();
    });

    test('should show login button when logged out', () => {
        setupTest();
        fireEvent.click(screen.getByRole('button', { name: /logout/i }));
        expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    });

    test('should goto home route when StoryHub text is clicked', () => {
        setupTest();
        const homeLink = screen.getByTestId('storyHub');
        fireEvent.click(homeLink);
        expect(window.location.pathname).toBe('/');
    });
});
