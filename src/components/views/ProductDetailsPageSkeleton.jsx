import { Card, CardContent } from '../ui/Card';

export const ProductDetailsPageSkeleton = () => (
	<div className='w-full max-w-7xl mx-auto mt-10 px-5'>
		<div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center'>
			<div className='w-full h-96 flex items-center justify-center'>
				<div className='w-full md:max-w-xs h-96 bg-gray-300 animate-pulse rounded'></div>
			</div>
			<Card>
				<CardContent className='w-full py-10'>
					<div className='space-y-4'>
						<div className='h-6 bg-gray-300 animate-pulse rounded'></div>
						<div className='h-4 bg-gray-300 animate-pulse rounded w-1/2'></div>
						<div className='h-4 bg-gray-300 animate-pulse rounded'></div>
						<div className='h-4 bg-gray-300 animate-pulse rounded'></div>
						<div className='h-4 bg-gray-300 animate-pulse rounded'></div>
						<div className='h-4 bg-gray-300 animate-pulse rounded w-3/4'></div>
						<div className='h-4 bg-gray-300 animate-pulse rounded'></div>
						<div className='h-4 bg-gray-300 animate-pulse rounded'></div>
						<div className='h-4 bg-gray-300 animate-pulse rounded'></div>
					</div>
					<div className='flex items-center w-full max-w-3xl gap-5 mt-5'>
						<div className='w-full'>
							<div className='h-4 bg-gray-300 animate-pulse rounded mb-2'></div>
							<div className='h-10 bg-gray-300 animate-pulse rounded'></div>
						</div>
						<div className='w-full'>
							<div className='h-4 bg-gray-300 animate-pulse rounded mb-2'></div>
							<div className='h-10 bg-gray-300 animate-pulse rounded'></div>
						</div>
					</div>
					<div className='w-full flex items-center gap-5 mt-5'>
						<div className='h-10 bg-gray-300 animate-pulse rounded w-1/2'></div>
						<div className='h-10 bg-gray-300 animate-pulse rounded w-1/2'></div>
					</div>
				</CardContent>
			</Card>
		</div>
	</div>
);
