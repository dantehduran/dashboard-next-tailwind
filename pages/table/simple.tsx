import { Pagination } from '@/components/Pagination';
import { Table } from '@/components/table';
import { data, headers } from '@/config/TableData';
import { NextPage } from 'next';
import { useMemo, useState } from 'react';
const PageSize = 4;
const SimpleTablePage: NextPage = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return data.slice(firstPageIndex, lastPageIndex);
	}, [currentPage]);
	return (
		<div className='p-4'>
			<h2 className='pb-4 text-3xl font-bold text-zinc-700'>Simple Table</h2>
			<h3 className='pb-4 text-xl text-zinc-600'>
				Simple Table with scrollbar on responsive
			</h3>
			<Table data={currentTableData} headers={headers} />
			<Pagination
				currentPage={currentPage}
				totalCount={data.length}
				pageSize={PageSize}
				onPageChange={page => setCurrentPage(page)}
			/>
		</div>
	);
};

export default SimpleTablePage;
