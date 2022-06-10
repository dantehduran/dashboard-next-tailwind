import { TableResponsive } from '@/components/table';
import { data, headers } from '@/config/TableData';
import { NextPage } from 'next';

const TableResponsivePage: NextPage = () => {
	return (
		<div className='p-4'>
			<h2 className='pb-4 text-3xl font-bold text-zinc-700'>
				Responsive Table
			</h2>
			<h3 className='pb-4 text-xl text-zinc-600'>A fully responsive table</h3>
			<TableResponsive data={data.slice(0, 8)} headers={headers} />
		</div>
	);
};

export default TableResponsivePage;
