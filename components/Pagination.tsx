import { usePagination } from '@/hooks/usePagination';
import clsx from 'clsx';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
const DOTS = '...';
type Props = {
	onPageChange: (page: number) => void;
	totalCount: number;
	siblingCount?: number;
	currentPage: number;
	pageSize: number;
	className?: string;
};
const Pagination = ({
	onPageChange,
	totalCount,
	siblingCount = 1,
	currentPage,
	pageSize,
	className,
}: Props) => {
	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
	});
	if (currentPage === 0 || paginationRange.length < 2) {
		return null;
	}

	const onNext = () => {
		onPageChange(currentPage + 1);
	};

	const onPrevious = () => {
		onPageChange(currentPage - 1);
	};

	const lastPage = paginationRange[paginationRange.length - 1];
	return (
		<ul
			className={clsx(
				'mt-3 flex justify-between -space-x-px sm:inline-flex',
				className,
			)}
		>
			<li>
				<button
					type='button'
					onClick={onPrevious}
					className={clsx(
						'ml-0 rounded-full border border-zinc-300 bg-white py-2 px-3 leading-tight text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700 sm:rounded-r-2xl',
						currentPage === 1 && 'cursor-not-allowed opacity-50',
					)}
					disabled={currentPage === 1}
				>
					Previous
				</button>
			</li>
			{paginationRange.map(pageNumber => {
				if (pageNumber === DOTS) {
					return (
						<li className='hidden border border-zinc-300 py-2 px-3 leading-tight text-zinc-500 sm:inline-block'>
							&#8230;
						</li>
					);
				}

				return (
					<li key={pageNumber} className='hidden sm:inline-block'>
						<button
							type='button'
							className={clsx(
								'border border-zinc-300 bg-white py-2 px-3 leading-tight text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700 ',
								{
									'bg-zinc-100 font-semibold text-zinc-600':
										pageNumber === currentPage,
								},
							)}
							onClick={() => onPageChange(pageNumber as number)}
						>
							{pageNumber}
						</button>
					</li>
				);
			})}
			<li>
				<button
					type='button'
					className={clsx(
						'ml-0 rounded-full border border-zinc-300 bg-white py-2 px-3 leading-tight text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700 sm:rounded-l-2xl',
						currentPage === lastPage && 'cursor-not-allowed opacity-50',
					)}
					disabled={currentPage === lastPage}
					onClick={onNext}
				>
					Next
				</button>
			</li>
		</ul>
	);
};

const PaginationWithIcons = () => {
	return (
		<div className=' flex items-center justify-between'>
			<div className='hidden text-sm text-zinc-600 sm:inline-block'>
				Showing <span className='font-semibold text-zinc-800'>1</span> to{' '}
				<span className='font-semibold text-zinc-800'>10</span> of{' '}
				<span className='font-semibold text-zinc-800'>97</span> results
			</div>
			<ul className='flex flex-1 justify-between -space-x-px sm:inline-flex sm:justify-end'>
				<li>
					<button
						type='button'
						aria-label='Previous'
						className='ml-0 rounded-full border border-zinc-300 bg-white px-2 py-2 leading-tight text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700 sm:rounded-r-2xl'
					>
						<BiChevronLeft className='h-5 w-5 shrink-0' />
					</button>
				</li>
				{[1, 2, 3, 4, 5].map(pageNumber => {
					return (
						<li key={pageNumber} className='hidden sm:inline-block'>
							<button
								type='button'
								className={clsx(
									'border border-zinc-300 bg-white py-2 px-3 leading-tight text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700 ',
									{
										'bg-zinc-100 font-semibold text-zinc-600': pageNumber === 3,
									},
								)}
							>
								{pageNumber}
							</button>
						</li>
					);
				})}
				<li>
					<button
						type='button'
						aria-label='Previous'
						className='ml-0 rounded-full border border-zinc-300 bg-white px-2 py-2 leading-tight text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700 sm:rounded-l-2xl'
					>
						<BiChevronRight className='h-5 w-5 shrink-0' />
					</button>
				</li>
			</ul>
		</div>
	);
};

const PaginationButtons = () => {
	return (
		<div className='flex items-center justify-between sm:justify-end'>
			<button
				type='button'
				aria-label='Previous'
				className='ml-0  inline-flex items-center rounded-full border border-zinc-300 bg-white px-4 py-2  leading-tight text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700 sm:rounded-r-2xl'
			>
				<BiChevronLeft className='mr-2 h-5 w-5 shrink-0' />
				Previous
			</button>
			<button
				type='button'
				aria-label='Previous'
				className='ml-0 inline-flex items-center rounded-full border border-zinc-300 bg-white px-4 py-2 leading-tight text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700 sm:rounded-l-2xl'
			>
				Next
				<BiChevronRight className='ml-2 h-5 w-5 shrink-0' />
			</button>
		</div>
	);
};

export { Pagination, PaginationWithIcons, PaginationButtons };
