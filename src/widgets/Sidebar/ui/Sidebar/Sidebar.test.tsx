import { screen } from '@testing-library/react';
import renderWithTranslation from 'shared/helpers/tests/renderWithTranslation';
import { fireEvent } from '@storybook/testing-library';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
    test('Render', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Collapse sidebar', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
