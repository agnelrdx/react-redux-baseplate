import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import reportWebVitals from 'utils/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const renderApp = () => {
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
};

if (Boolean(process.env.REACT_APP_ENABLE_MSW)) {
	import(/* webpackChunkName: "msw"*/ './utils/msw').then(async ({ worker }) => {
		await worker.start({ serviceWorker: { url: '/mockServiceWorker.js' } });
		renderApp();
	});
} else {
	renderApp();
}

reportWebVitals();
