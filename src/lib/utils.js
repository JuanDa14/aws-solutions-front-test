import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export const setLocalStorage = (key, data) => {
	const cachedItem = {
		data,
		timestamp: Date.now(),
	};
	localStorage.setItem(key, JSON.stringify(cachedItem));
};

export const getLocalStorage = (key, maxAge = 3600000) => {
	const cachedItem = localStorage.getItem(key);
	if (!cachedItem) return null;

	const { data, timestamp } = JSON.parse(cachedItem);
	if (Date.now() - timestamp > maxAge) {
		localStorage.removeItem(key);
		return null;
	}

	return data;
};
