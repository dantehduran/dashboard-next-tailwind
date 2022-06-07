const Pagination = () => {
	return (
		<div aria-label='Page navigation example' className='py-4'>
			<ul className='inline-flex -space-x-px'>
				<li>
					<button
						type='button'
						className='ml-0 rounded-l-lg border border-zinc-300 bg-white py-2 px-3 leading-tight text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700 '
					>
						Previous
					</button>
				</li>
				<li>
					<button
						type='button'
						className='border border-zinc-300 bg-white py-2 px-3 leading-tight text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700 '
					>
						1
					</button>
				</li>
				<li>
					<button
						type='button'
						className='border border-zinc-300 bg-white py-2 px-3 leading-tight text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700'
					>
						2
					</button>
				</li>
				<li>
					<button
						type='button'
						aria-current='page'
						className='border border-zinc-300 bg-zinc-100 py-2 px-3 font-semibold leading-tight text-zinc-600 hover:bg-zinc-100 hover:text-zinc-700 '
					>
						3
					</button>
				</li>
				<li>
					<button
						type='button'
						className='border border-zinc-300 bg-white py-2 px-3 leading-tight text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700 '
					>
						4
					</button>
				</li>
				<li>
					<button
						type='button'
						className='border border-zinc-300 bg-white py-2 px-3 leading-tight text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700 '
					>
						5
					</button>
				</li>
				<li>
					<button
						type='button'
						className='rounded-r-lg border border-zinc-300 bg-white py-2 px-3 leading-tight text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700 '
					>
						Next
					</button>
				</li>
			</ul>
		</div>
	);
};

export { Pagination };
