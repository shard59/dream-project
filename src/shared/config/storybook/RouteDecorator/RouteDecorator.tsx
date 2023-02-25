import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

const RouteDecorator = (StoryComponent: Story) => (
    <BrowserRouter>
        <StoryComponent />
    </BrowserRouter>
);

export default RouteDecorator;
