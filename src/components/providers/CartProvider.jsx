import { createContext, useContext, useState } from 'react';
import { setLocalStorage, getLocalStorage } from '../../lib/utils';

const CartContext = createContext();

export function useCart() {
	return useContext(CartContext);
}

export function CartProvider({ children }) {
	const getInitialCartCount = () => {
		const savedCount = getLocalStorage('cartCount');
		return savedCount ? parseInt(savedCount) : 0;
	};

	const [cartCount, setCartCount] = useState(getInitialCartCount);

	const updateCartCount = (callback) => {
		setCartCount((prevCount) => {
			const newCount = callback(prevCount);
			setLocalStorage('cartCount', newCount);
			return newCount;
		});
	};

	return (
		<CartContext.Provider value={{ cartCount, updateCartCount }}>{children}</CartContext.Provider>
	);
}
