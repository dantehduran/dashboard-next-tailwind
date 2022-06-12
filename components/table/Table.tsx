import { Row } from '@/types/table';

interface Props {
	headers: string[];
	data: Row[];
}

const Table = ({ data, headers }: Props) => {
	return (
		<div className='relative overflow-x-auto rounded-xl  shadow-md'>
			<table className='w-full text-left text-sm text-zinc-500'>
				<thead className='bg-zinc-100 text-xs '>
					<tr>
						{headers.map((header, index) => (
							<th key={index} scope='col' className='px-6 py-3 capitalize'>
								{header}
							</th>
						))}
						<th scope='col' className='px-6 py-3 text-center'>
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
