import { getLocalStorage, setLocalStorage } from '../lib/utils';

const BASE_URL = import.meta.env.VITE_BASE_URL;

console.log({ BASE_URL });

export const getProducts = async () => {
	const cachedProducts = getLocalStorage('products');

	if (cachedProducts) return cachedProducts;

	const response = await fetch(`${BASE_URL}/product`);
	const data = await response.json();

	setLocalStorage('products', data);
	return data;
};

export const getProductDetails = async (id) => {
	const cacheKey = `product-${id}`;
	const cachedProduct = getLocalStorage(cacheKey);
	if (cachedProduct) return cachedProduct;

	const response = await fetch(`${BASE_URL}/product/${id}`);
	const data = await response.json();

	setLocalStorage(cacheKey, data);
	return data;
};

export const addToCart = async (id, colorCode, storageCode) => {
	const response = await fetch(`${BASE_URL}/cart`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ id, colorCode, storageCode }),
	});

	const data = await response.json();

	setLocalStorage('cartCount', data.count);

	return data;
};
