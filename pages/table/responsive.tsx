import { TableResponsive } from '@/components/table';
import { data, headers } from '@/config/TableData';
import { NextPage } from 'next';

const TableResponsivePage: NextPage = () => {
	return (
		<div className='p-4'>
			<h2 className='pb-4 text-3xl font-bold text-zinc-700'>Grid Table</h2>
			<h3 className='pb-4 text-xl text-zinc-600'>
				Table with a grid layout on responsive
			</h3>
			<TableResponsive data={data} headers={headers} />
		</div>
	);
};

export default TableResponsivePage;
