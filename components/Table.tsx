const Table = () => {
	return (
		<div className='relative overflow-x-auto rounded-2xl shadow-md'>
			<table className='w-full text-left text-sm text-zinc-500'>
				<thead className=' bg-zinc-100  text-xs  '>
					<tr>
						<th scope='col' className='px-6 py-3'>
							Product name
						</th>
						<th scope='col' className='px-6 py-3'>
							Color
						</th>
						<th scope='col' className='px-6 py-3'>
							Category
						</th>
						<th scope='col' className='px-6 py-3'>
							Price
						</th>
						<th scope='col' className='px-6 py-3'>
							Options
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className='border-b bg-white text-left '>
						<th
							scope='row'
							className='whitespace-nowrap px-6 py-4 font-medium '
						>
							Apple MacBook Pro 17"
						</th>
						<td className='px-6 py-4'>Sliver</td>
						<td className='px-6 py-4'>Laptop</td>
						<td className='px-6 py-4'>$2999</td>
						<td className='px-6 py-4 '>
							<span className='font-medium text-blue-600 hover:underline '>
								Edit
							</span>
						</td>
					</tr>
					<tr className='border-b bg-white text-left'>
						<th
							scope='row'
							className='whitespace-nowrap px-6 py-4 font-medium '
						>
							Microsoft Surface Pro
						</th>
						<td className='px-6 py-4'>White</td>
						<td className='px-6 py-4'>Laptop PC</td>
						<td className='px-6 py-4'>$1999</td>
						<td className='px-6 py-4 '>
							<span className='font-medium text-blue-600 hover:underline '>
								Edit
							</span>
						</td>
					</tr>
					<tr className='bg-white text-left '>
						<th
							scope='row'
							className='whitespace-nowrap px-6 py-4 font-medium '
						>
							Magic Mouse 2
						</th>
						<td className='px-6 py-4'>Black</td>
						<td className='px-6 py-4'>Accessories</td>
						<td className='px-6 py-4'>$99</td>
						<td className='px-6 py-4 '>
							<span className='font-medium text-blue-600 hover:underline dark:text-blue-500'>
								Edit
							</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Table;
