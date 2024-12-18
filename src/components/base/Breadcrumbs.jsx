import { Link, useLocation } from 'react-router-dom';

export const Breadcrumbs = () => {
	const location = useLocation();

	const generateBreadcrumbs = () => {
		const paths = location.pathname.split('/').filter(Boolean);
		return paths.map((path, index) => {
			const routeTo = '/' + paths.slice(0, index + 1).join('/');
			return (
				<span key={routeTo} className='text-sm font-medium'>
					{index > 0 && <span className='px-2 text-muted-foreground'>/</span>}
					<Link
						to={routeTo}
						className='text-primary hover:text-primary/90 transition capitalize'
					>
						{path}
					</Link>
				</span>
			);
		});
	};

	return (
		<div className='flex items-center space-x-1'>
			<Link
				to='/'
				className='font-semibold text-2xl text-primary hover:text-primary/90 transition'
			>
				Shopping Cart
			</Link>
			{location.pathname !== '/' && <span className='px-2 text-muted-foreground'>/</span>}
			{generateBreadcrumbs()}
		</div>
	);
};
