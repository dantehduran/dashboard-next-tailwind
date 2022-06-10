import {
	PaginationButtons,
	PaginationTableData,
	PaginationWithIcons,
} from '@/components/Pagination';
import type { NextPage } from 'next';

const PaginationPage: NextPage = () => {
	return (
		<div className='p-4'>
			<h2 className='pb-4 text-3xl font-bold text-zinc-700'>
				Pagination Styles
			</h2>
			<h3 className='pb-4 text-xl text-zinc-600'>Previous and next</h3>
			<h4 className='text-zinc-500'>Show simple previous and next elements.</h4>
			<div className='mt-3  rounded-md border border-zinc-300 p-4 '>
				<PaginationButtons
					containerClass={'flex items-center justify-between sm:justify-center'}
				/>
			</div>
			<br />
			<h3 className='pb-4 text-xl text-zinc-600'>Pagination with icons</h3>
			<h4 className='text-zinc-500'>
				The following pagination component example shows how you can use SVG
				icons instead of text to show the previous and next pages.
			</h4>
			<div className='mt-3 rounded-md border border-zinc-300 p-4'>
				<PaginationWithIcons />
			</div>
			<br />
			<h3 className='pb-4 text-xl text-zinc-600'>Table data pagination</h3>
			<h4 className='text-zinc-500'>
				You can use the following markup to show the number of data shown inside
				a table element and also the previous and next action buttons.
			</h4>
			<div className='mt-3  rounded-md border border-zinc-300 p-4 '>
				<PaginationTableData />
			</div>
		</div>
	);
};

export default PaginationPage;
