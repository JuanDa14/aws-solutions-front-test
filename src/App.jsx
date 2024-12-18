import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components/views/Header';
import { ProductListPage } from './components/pages/ProductListPage';
import { ProductDetailsPage } from './components/pages/ProductDetailsPage';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<ProductListPage />} />
				<Route path='/product/:id' element={<ProductDetailsPage />} />
				<Route path='/*' element={<Navigate to='/' />}></Route>
			</Routes>
		</>
	);
}

export default App;
