import { Suspense, lazy } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import theme from 'utils/theme';
import { store, persistor } from 'utils/store';
import PageLoader from 'components/page-loader/PageLoader';
import 'assets/global.module.css';

const HomePage = lazy(() => import('pages/home/Home'));
const NotFoundPage = lazy(() => import('pages/not-found/NotFound'));

function App() {
	return (
		<ThemeProvider theme={theme}>
			<StyledEngineProvider injectFirst>
				<CssBaseline />
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<Suspense fallback={<PageLoader />}>
							<BrowserRouter>
								<Routes>
									<Route path="/" element={<HomePage />} />
									<Route path="/404" element={<NotFoundPage />} />
									<Route path="*" element={<Navigate replace to="/404" />} />
								</Routes>
							</BrowserRouter>
						</Suspense>
					</PersistGate>
				</Provider>
			</StyledEngineProvider>
		</ThemeProvider>
	);
}

export default App;
