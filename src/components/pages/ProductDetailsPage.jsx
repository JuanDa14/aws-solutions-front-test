import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PlusIcon } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/Card';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '../../components/ui/Select';
import { Label } from '../../components/ui/Label';
import { getProductDetails } from '../../services/api';
import { cn } from '../../lib/utils';
import { Button, buttonVariants } from '../ui/Button';

export const ProductDetailsPage = () => {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [color, setColor] = useState('');
	const [storage, setStorage] = useState('');

	useEffect(() => {
		const loadProduct = async () => {
			const data = await getProductDetails(id);
			setProduct(data);
			if (data?.options.colors?.length > 0) setColor(data?.options.colors[0].code);
			if (data?.options.storages?.length > 0) setStorage(data?.options.storages[0].code);
		};
		loadProduct();
	}, [id]);

	const handleAddToCart = async () => {
		console.log('addToCart');
	};

	if (!product) return <div>Cargando...</div>;

	return (
		<div className='w-full max-w-7xl mx-auto mt-10 px-5 mb-5'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center'>
				<div className='w-full h-96 flex items-center justify-center'>
					<img
						src={product.imgUrl}
						alt={product.model}
						className='h-full w-auto object-contain transition-transform duration-500 ease-in-out hover:scale-105'
					/>
				</div>
				<Card>
					<CardContent className='w-full py-10'>
						<div>
							<h1 className='text-2xl font-bold mb-4'>
								{product.brand} {product.model}
							</h1>

							<ul className='space-y-2 text-sm'>
								<li>
									<span className='font-medium'>Precio:</span> {product.price} €
								</li>
								<li>
									<span className='font-medium'>CPU:</span> {product.cpu}
								</li>
								<li>
									<span className='font-medium'>RAM:</span> {product.ram}
								</li>
								<li>
									<span className='font-medium'>Sistema Operativo:</span> {product.os}
								</li>
								<li>
									<span className='font-medium'>Resolución:</span>{' '}
									{product.displayResolution}
								</li>
								<li>
									<span className='font-medium'>Batería:</span> {product.battery}
								</li>
								<li>
									<span className='font-medium'>Cámaras:</span> {product.primaryCamera},{' '}
									{product.secondaryCamera}
								</li>
								<li>
									<span className='font-medium'>Dimensiones:</span> {product.dimentions}
								</li>
								<li>
									<span className='font-medium'>Peso:</span> {product.weight} g
								</li>
							</ul>
						</div>

						<div className='flex items-center w-full max-w-3xl gap-5 mt-2'>
							<div className='w-full gap-5'>
								<Label>Color:</Label>
								<Select defaultValue={color}>
									<SelectTrigger>
										<SelectValue placeholder='Select color' />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Select color</SelectLabel>
											{product?.options.colors?.map((c, index) => (
												<SelectItem key={index} value={c.code}>
													{c.name}
												</SelectItem>
											))}
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
							<div className='w-full'>
								<Label>Storage:</Label>
								<Select defaultValue={storage}>
									<SelectTrigger>
										<SelectValue placeholder='Select storage' />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Select storage</SelectLabel>
											{product?.options.storages?.map((c, index) => (
												<SelectItem key={index} value={c.code}>
													{c.name}
												</SelectItem>
											))}
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
						</div>

						<div className='w-full flex items-center gap-5 mt-5'>
							<Link to='/' className={cn(buttonVariants({ variant: 'outline' }), 'w-full')}>
								Back to list
							</Link>
							<Button onClick={handleAddToCart} className='w-full'>
								<PlusIcon />
								Add to cart
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};
