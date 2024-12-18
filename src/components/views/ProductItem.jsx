import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/Card';
import { buttonVariants } from '../ui/Button';
import { cn } from '../../lib/utils';

export const ProductItem = ({ product }) => {
	return (
		<Card className='w-full md:max-w-xs min-h-[300px] shadow-sm flex flex-col justify-between group transition-all duration-300 ease-in-out hover:shadow'>
			<CardHeader>
				<CardTitle className='flex flex-col items-center'>
					<div className='w-full h-[150px] flex items-center justify-center'>
						<img
							src={product.imgUrl}
							alt={product.model}
							className='h-full w-auto object-contain transition-transform duration-500 ease-in-out group-hover:scale-105'
						/>
					</div>
					<h3 className='mt-3 text-lg font-semibold'>{product.brand}</h3>
				</CardTitle>
				<CardDescription className='text-center mt-2'>
					<p className='text-gray-700'>{product.model}</p>
					<p className='text-gray-900 font-bold'>$ {product.price}</p>
				</CardDescription>
			</CardHeader>
			<CardFooter className='mt-4'>
				<Link
					to={`/product/${product.id}`}
					className={cn(buttonVariants({ variant: 'outline' }), 'w-full')}
				>
					Show product
				</Link>
			</CardFooter>
		</Card>
	);
};
