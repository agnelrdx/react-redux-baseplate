import { screen } from '@testing-library/react';
import { render } from 'utils/test-utils';
import Home from './Home';

test('renders home page', () => {
	render(<Home />);

	const title = screen.getByText(/React Baseplate/i);
	const buttons = screen.getAllByRole('button');

	expect(title).toBeInTheDocument();
	expect(buttons.length).toBe(4);
});
