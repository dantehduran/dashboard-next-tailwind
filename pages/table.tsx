import Table from '@/components/Table';
import TableGrid from '@/components/TableGrid';
import TableResponsive from '@/components/TableResponsive';
import useBreakpoint from '@/hooks/useBreakpoint';
import type { NextPage } from 'next';
const headers = ['Product Name', 'Color', 'Category', 'Price'];
const data = [
	{
		name: 'Apple MacBook Pro 17"',
		color: 'Silver',
		category: 'Laptop',
		price: '$2,000.00',
	},
	{
		name: 'Microsoft Surface Pro 4',
		color: 'Black',
		category: 'Laptop',
		price: '$1,990.00',
	},
	{
		name: 'Apple iPad Pro',
		color: 'Silver',
		category: 'Tablet',
		price: '$1,000.00',
	},
	{
		name: 'Apple iPhone X',
		color: 'Black',
		category: 'Phone',
		price: '$1,000.00',
	},
	{
		name: 'Apple Watch Series 3',
		color: 'Silver',
		category: 'Watch',
		price: '$1,000.00',
	},
	{
		name: 'Magic Mouse',
		color: 'Silver',
		category: 'Mouse',
		price: '$90.00',
	},
];

const TablePage: NextPage = () => {
	const breakpoint = useBreakpoint();
	return (
		<div className='p-4'>
			<h2 className='pb-4 text-3xl font-bold text-zinc-700'>Table</h2>
			<h3 className='pb-2 text-xl text-zinc-600'>
				Simple table with overflow x auto
			</h3>
			<Table data={data} headers={headers} />
			<br />
			<h3 className='pb-2 text-xl text-zinc-600'>
				Responsive table transform rows in to cards {breakpoint}
			</h3>
			<TableResponsive data={data} headers={headers} />
			<br />
			<h3 className='pb-2 text-xl text-zinc-600'>
				Responsive table using grid {breakpoint}
			</h3>
			<TableGrid data={data} headers={headers} />
		</div>
	);
};

export default TablePage;
