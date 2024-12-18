import { useEffect } from 'react';
import { getProducts } from './services/api';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ProductListPage } from './components/pages/ProductListPage';
import { ProductDetailsPage } from './components/pages/ProductDetailsPage';

function App() {
	useEffect(() => {
		const loadProducts = async () => {
			try {
				const data = await getProducts();
				console.log({ data });
			} catch (error) {
				console.log('[getProducts]', error);
			} finally {
			}
		};
		loadProducts();
	}, []);

	return (
		<>
			<Routes>
				<Route path='/' element={<ProductListPage />} />
				<Route path='/product/:id' element={<ProductDetailsPage />} />
				<Route path='/*' element={<Navigate to='/' />}></Route>
			</Routes>
		</>
	);
}

export default App;
