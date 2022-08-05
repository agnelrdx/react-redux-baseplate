import { initialize, mswDecorator } from 'msw-storybook-addon';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Box from '@mui/material/Box';

import { store, persistor } from '../src/utils/store';
import theme from '../src/utils/theme';

initialize();

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	layout: 'fullscreen',
};

export const decorators = [
	mswDecorator,
	Story => {
		return (
			<ThemeProvider theme={theme}>
				<StyledEngineProvider injectFirst>
					<CssBaseline />
					<Provider store={store}>
						<PersistGate loading={null} persistor={persistor}>
							<Box p={1}>
								<Story />
							</Box>
						</PersistGate>
					</Provider>
				</StyledEngineProvider>
			</ThemeProvider>
		);
	},
];
