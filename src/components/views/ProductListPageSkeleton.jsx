export const ProductListPageSkeleton = ({ length = 12 }) => (
	<div className='max-w-7xl mx-auto mt-10 mb-10 px-5'>
		<div className='mt-10 flex flex-col gap-3 md:flex-row md:justify-between md:items-center w-full text-primary mb-10'>
			<div className='h-8 w-1/3 bg-gray-300 animate-pulse rounded'></div>
			<div className='h-10 w-full bg-gray-300 animate-pulse rounded md:w-1/3'></div>
		</div>
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
			{Array.from({ length }).map((_, index) => (
				<div
					key={index}
					className='h-64 bg-gray-300 min-h-[300px] animate-pulse rounded flex flex-col'
				>
					<div className='h-40 bg-gray-300 animate-pulse rounded-t'></div>
					<div className='h-5 bg-gray-300 mt-2 mx-2 rounded'></div>
					<div className='h-4 bg-gray-300 mt-1 mx-2 rounded w-3/4'></div>
				</div>
			))}
		</div>
	</div>
);
