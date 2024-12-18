import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

export const Input = forwardRef(({ id, type, label, className, ...props }, ref) => {
	return (
		<div className='relative'>
			{type === 'search' && (
				<span className='absolute left-3 top-0 bottom-0 flex items-center justify-center cursor-pointer'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-5 h-5 text-primary'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
						/>
					</svg>
				</span>
			)}
			<input
				className={cn(
					'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
					className,
					type === 'search' && 'pl-10'
				)}
				ref={ref}
				type={type}
				id={id}
				min={0}
				autoComplete='off'
				onWheel={(e) => e.currentTarget.blur()}
				{...props}
			/>
		</div>
	);
});

Input.displayName = 'Input';
