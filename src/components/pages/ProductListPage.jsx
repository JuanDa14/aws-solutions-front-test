import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';

import { Input } from '../ui/Input';
import { getProducts } from '../../services/api';
import { ProductItem } from '../views/ProductItem';
import { ProductListPageSkeleton } from '../views/ProductListPageSkeleton';

export const ProductListPage = () => {
	const [products, setProducts] = useState([]);
	const [search, setSearch] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadProducts = async () => {
			try {
				const data = await getProducts();
				setProducts(data);
			} catch (error) {
				console.log('[getProducts]', error);
				toast.error('Error fetching products.');
			} finally {
				setLoading(false);
			}
		};
		loadProducts();
	}, []);

	const filteredProducts = products.filter(
		(product) =>
			product.brand.toLowerCase().includes(search.toLowerCase()) ||
			product.model.toLowerCase().includes(search.toLowerCase())
	);

	if (loading) return <ProductListPageSkeleton />;

	return (
		<div className='max-w-7xl mx-auto mt-10 mb-10 px-5'>
			<div className='mt-10 flex flex-col gap-3 md:flex-row md:justify-between md:items-center w-full text-primary mb-10'>
				<h3 className='text-2xl font-semibold'>Product Listing</h3>
				<Input
					className='w-full'
					type='search'
					placeholder='Search by brand or model'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
				{filteredProducts.map((product) => (
					<ProductItem key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};
