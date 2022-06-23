import type { NextPage } from 'next';

const NotFound: NextPage = () => {
	return (
		<div className='flex h-screen flex-col items-center justify-center bg-zinc-800'>
			<h2 className=' text-8xl font-extrabold text-violet-600'>404</h2>
			<span className='text-lg font-semibold text-zinc-100'>
				page not found
			</span>
		</div>
	);
};

export default NotFound;
