import './styles/globals.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToasterProvider } from './components/providers/ToasterProvider.jsx';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ToasterProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ToasterProvider>
	</StrictMode>
);
