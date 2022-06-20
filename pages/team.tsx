import { Table } from '@/components/table';
import type { NextPage } from 'next';

const headers = ['name', 'age', 'status'];

const menberList = [
	{
		name: 'John Doe',
		age: '30',
		status: 'active',
	},
	{
		name: 'Anna Jane',
		age: '25',
		status: 'active',
	},
	{
		name: 'Phin Jones',
		age: '35',
		status: 'inactive',
	},
];

const Team: NextPage = () => {
	return (
		<div className='p-4'>
			<div className='flex justify-between pb-4'>
				<h2 className=' text-3xl font-bold text-zinc-700'>Team Members</h2>
				<button
					type='button'
					className='rounded-lg bg-violet-600  px-3 py-2 font-semibold text-zinc-100'
				>
					Add Member
				</button>
			</div>
			<Table headers={headers} data={menberList} />
		</div>
	);
};

export default Team;
