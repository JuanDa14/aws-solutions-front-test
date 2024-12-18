import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '../ui/Button';

export const Header = () => {
	return (
		<header className='w-full border bg-background text-primary py-5 shadow-md px-5'>
			<div className='max-w-7xl mx-auto flex items-center justify-between'>
				<Link
					to='/'
					className='text-2xl font-bold hover:text-primary/90 transition duration-300'
				>
					Shopping Cart
				</Link>
				<nav className='flex items-center space-x-4'>
					<Button variant='ghost'>
						<ShoppingCart className='w-5 h-5' />
					</Button>
				</nav>
			</div>
		</header>
	);
};
