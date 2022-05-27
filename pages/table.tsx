import Table from '@/components/Table';
import type { NextPage } from 'next';

const TablePage: NextPage = () => {
	return (
		<div className='p-4'>
			<h2 className='pb-4 text-3xl font-bold text-zinc-700'>Table</h2>
			<Table />
		</div>
	);
};

export default TablePage;
