import { ComponentStory, ComponentMeta } from '@storybook/react';

import Home from './Home';
import { postsMock } from 'api-mocks/posts-mock';

export default {
	title: 'Pages/Home',
	component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => {
	return <Home />;
};

export const Default = Template.bind({});

Default.parameters = {
	msw: [postsMock()],
};
