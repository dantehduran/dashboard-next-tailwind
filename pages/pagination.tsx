import {
	PaginationButtons,
	PaginationWithIcons,
} from '@/components/Pagination';
import type { NextPage } from 'next';

const PaginationPage: NextPage = () => {
	return (
		<div className='p-4'>
			<h2 className='pb-4 text-3xl font-bold text-zinc-700'>
				Pagination Styles
			</h2>
			<h3 className='pb-4 text-xl text-zinc-600'>Pagination with icons</h3>
			<h4 className='text-zinc-500'>
				The following pagination component example shows how you can use SVG
				icons instead of text to show the previous and next pages.
			</h4>
			<div className='mt-3 rounded-md border border-zinc-300 p-4'>
				<PaginationWithIcons />
			</div>
			<br />
			<h3 className='pb-4 text-xl text-zinc-600'>Previous and next</h3>
			<h4 className='text-zinc-500'>Show simple previous and next elements.</h4>
			<div className='mt-3 rounded-md border border-zinc-300 p-4'>
				<PaginationButtons />
			</div>
		</div>
	);
};

export default PaginationPage;
