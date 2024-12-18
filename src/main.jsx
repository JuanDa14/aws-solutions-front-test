import './styles/globals.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToasterProvider } from './components/providers/ToasterProvider.jsx';
import { CartProvider } from './components/providers/CartProvider.jsx';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<CartProvider>
			<ToasterProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ToasterProvider>
		</CartProvider>
	</StrictMode>
);
