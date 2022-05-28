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

const Table = () => {
	return (
		<div className='relative overflow-x-auto rounded-2xl shadow-md'>
			<table className='w-full text-left text-sm text-zinc-500'>
				<thead className='bg-zinc-100 text-xs '>
					<tr>
						{headers.map((header, index) => (
							<th key={index} scope='col' className='px-6 py-3'>
								{header}
							</th>
						))}
						<th scope='col' className='px-6 py-3'>
							Options
						</th>
					</tr>
				</thead>
				<tbody>
					{data.map((row, index) => (
						<tr key={index} className='border-b bg-white text-left '>
							{Object.values(row).map((value, valueindex) => (
								<td key={valueindex} className='px-4 py-2  md:px-6 md:py-4'>
									{value}
								</td>
							))}

							<td className='text-center md:px-6 md:py-4'>
								<span className='font-medium text-blue-600 hover:underline '>
									Edit
								</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
