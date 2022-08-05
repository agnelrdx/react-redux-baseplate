import { ComponentMeta } from '@storybook/react';

import PageLoader from './PageLoader';

export default {
	title: 'Components/PageLoader',
	component: PageLoader,
} as ComponentMeta<typeof PageLoader>;

export const Default = () => {
	return <PageLoader />;
};
