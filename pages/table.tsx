import Table from '@/components/Table';
import type { NextPage } from 'next';

const TablePage: NextPage = () => {
	return (
		<div className='p-4'>
			<h2 className='pb-4 text-3xl font-bold text-zinc-700'>Table</h2>
			<h3 className='pb-2 text-xl text-zinc-600'>
				Simple table with overflow x auto
			</h3>
			<Table />
		</div>
	);
};

export default TablePage;
