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
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
