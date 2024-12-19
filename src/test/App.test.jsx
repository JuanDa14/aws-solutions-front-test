import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

vi.mock('../components/views/Header', () => ({
	Header: () => <div data-testid='header'>Header</div>,
}));

vi.mock('../components/pages/ProductListPage', () => ({
	ProductListPage: () => <div data-testid='product-list-page'>Product List Page</div>,
}));

vi.mock('../components/pages/ProductDetailsPage', () => ({
	ProductDetailsPage: () => <div data-testid='product-details-page'>Product Details Page</div>,
}));

describe('App Component Render', () => {
	it('renders the Header and ProductListPage for the root route ("/")', () => {
		window.history.pushState({}, 'Home Page', '/');
		render(
			<BrowserRouter>
				<App />
			</BrowserRouter>
		);

		expect(screen.getByTestId('header')).toBeInTheDocument();
		expect(screen.getByTestId('product-list-page')).toBeInTheDocument();
	});

	it('renders ProductDetailsPage for "/product/:id" route', () => {
		window.history.pushState({}, 'Product Details', '/product/123');
		render(
			<BrowserRouter>
				<App />
			</BrowserRouter>
		);

		expect(screen.getByTestId('header')).toBeInTheDocument();
		expect(screen.getByTestId('product-details-page')).toBeInTheDocument();
	});

	it('navigates to "/" for an unknown route', () => {
		window.history.pushState({}, 'Unknown Route', '/unknown');
		render(
			<BrowserRouter>
				<App />
			</BrowserRouter>
		);

		expect(screen.getByTestId('header')).toBeInTheDocument();
		expect(screen.getByTestId('product-list-page')).toBeInTheDocument();
	});
});
