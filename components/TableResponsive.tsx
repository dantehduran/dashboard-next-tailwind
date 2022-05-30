interface Row {
	[key: string]: string | number;
}

interface Props {
	headers: string[];
	data: Row[];
}

const TableResponsive = ({ data, headers }: Props) => {
	return (
		<table className='my-5 flex w-full flex-row flex-nowrap overflow-hidden rounded-lg  text-zinc-500 sm:inline-table sm:bg-white sm:text-xs sm:shadow-lg'>
			<thead className=''>
				{data.map((_, index) => (
					<tr
						key={index}
						className='mb-2 flex flex-col flex-nowrap rounded-l-lg  border bg-zinc-100  sm:mb-0 sm:hidden sm:rounded-none sm:border-0 first:sm:table-row'
					>
						{headers.map((header, index) => (
							<th
								key={index}
								className='border-b p-3 text-left last:border-b-0 sm:border-b-0 sm:px-6 sm:py-3'
							>
								{header}
							</th>
						))}
					</tr>
				))}
			</thead>
			<tbody className='flex-1 sm:flex-none'>
				{data.map((row, index) => (
					<tr
						key={index}
						className='flex-no wrap mb-2 flex flex-col border sm:mb-0 sm:table-row sm:border-b'
					>
						{Object.values(row).map((value, valueindex) => (
							<td
								key={valueindex}
								className=' border-b p-3 last:border-b-0 sm:border-0 sm:px-6 sm:py-4 '
							>
								{value}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default TableResponsive;
