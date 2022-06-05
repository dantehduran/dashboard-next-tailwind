import { Table } from '@/components/table';
import { data, headers } from '@/config/TableData';
import { NextPage } from 'next';

const SimpleTablePage: NextPage = () => {
	return (
		<div className='p-4'>
			<h2 className='pb-4 text-3xl font-bold text-zinc-700'>Simple Table</h2>
			<h3 className='pb-4 text-xl text-zinc-600'>
				Simple Table with scrollbar on responsive
			</h3>
			<Table data={data} headers={headers} />
		</div>
	);
};

export default SimpleTablePage;
