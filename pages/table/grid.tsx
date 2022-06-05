import { TableGrid } from '@/components/table';
import { data, headers } from '@/config/TableData';
import { NextPage } from 'next';

const GridTablePage: NextPage = () => {
	return (
		<div className='p-4'>
			<h2 className='pb-4 text-3xl font-bold text-zinc-700'>Table Grid</h2>
			<h3 className='pb-4 text-xl text-zinc-600'>
				A fully responsive table using grid
			</h3>
			<TableGrid data={data} headers={headers} />
		</div>
	);
};

export default GridTablePage;
