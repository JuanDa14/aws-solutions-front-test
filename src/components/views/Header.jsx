import { ShoppingCart } from 'lucide-react';
import { Button } from '../ui/Button';
import { useCart } from '../providers/CartProvider';
import { Breadcrumbs } from '../base/Breadcrumbs';

export const Header = () => {
	const { cartCount } = useCart();

	return (
		<header className='w-full border bg-background text-primary py-5 shadow-md px-5'>
			<div className='max-w-7xl mx-auto flex items-center justify-between'>
				<div className='flex-1 mx-6'>
					<Breadcrumbs />
				</div>

				<nav className='flex items-center space-x-4'>
					<Button variant='ghost'>
						<ShoppingCart className='w-5 h-5' />
						<span>
							Carrito: {cartCount} {cartCount === 1 ? 'item' : 'items'}
						</span>
					</Button>
				</nav>
			</div>
		</header>
	);
};
