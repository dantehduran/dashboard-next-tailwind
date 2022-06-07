import { usePagination } from '@/hooks/usePagination';
import clsx from 'clsx';
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
		<ul className={clsx('mt-3 inline-flex -space-x-px', className)}>
			<li>
				<button
					type='button'
					onClick={onPrevious}
					className={clsx(
						'ml-0 rounded-l-lg border border-zinc-300 bg-white py-2 px-3 leading-tight text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700',
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
						<li className='py-2 px-3 leading-tight text-zinc-500'>&#8230;</li>
					);
				}

				return (
					<li key={pageNumber}>
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
						'ml-0 rounded-l-lg border border-zinc-300 bg-white py-2 px-3 leading-tight text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700',
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

export { Pagination };
