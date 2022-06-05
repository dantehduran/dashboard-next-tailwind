import { Row } from '@/types/table';

interface Props {
	headers: string[];
	data: Row[];
}
const TableGrid = ({ data, headers }: Props) => {
	return (
		<div className='flex text-sm md:rounded-2xl md:shadow-md'>
			<ol className=' grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:inline-block'>
				{/* <!-- The first list item is the header of the table --> */}
				<li className='item hidden rounded-t-2xl text-xs font-bold text-zinc-500 md:grid md:grid-cols-4 md:first:bg-zinc-100 '>
					{headers.map((header, index) => (
						<div
							key={index}
							className='flex items-center justify-start truncate md:px-6 md:py-3'
						>
							{header}
						</div>
					))}
				</li>
				{/* <!-- The rest of the items in the list are the actual data --> */}
				{data.map((row, index) => (
					<li
						key={index}
						className={` rounded-2xl border-2 md:grid md:grid-cols-4 md:rounded-none md:border-x-0 md:border-y-0 md:border-b md:p-0 md:last:border-b-0`}
					>
						{Object.values(row).map((value, valueindex) => (
							<div
								className='grid grid-cols-[minmax(9em,_30%)_1fr] items-center border-b p-3 text-zinc-600 before:content-[attr(data-name)] last:border-b-0 md:grid-cols-none md:border-none md:px-6 md:py-3 md:before:content-none'
								key={valueindex}
								data-name={headers[valueindex]}
							>
								{value}
							</div>
						))}
					</li>
				))}
			</ol>
		</div>
	);
};

export default TableGrid;
