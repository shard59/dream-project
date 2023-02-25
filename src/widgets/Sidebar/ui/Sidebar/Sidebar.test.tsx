import { screen } from '@testing-library/react';
import { fireEvent } from '@storybook/testing-library';
import Sidebar from './Sidebar';
import componentRender from "shared/helpers/tests/componentRender";

describe('Sidebar', () => {
    test('Render', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Collapse sidebar', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
