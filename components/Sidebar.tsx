import { HiOutlineColorSwatch } from 'react-icons/hi';
import { BiDockLeft } from 'react-icons/bi';
const Sidebar = () => {
	return (
		<div className='h-full overflow-hidden rounded-xl bg-zinc-800 text-zinc-400'>
			<div className='flex items-center space-x-2 py-4 px-4 text-zinc-200'>
				<HiOutlineColorSwatch className='h-12 w-12 rounded-lg bg-white text-zinc-800' />
				<div className='flex flex-1 flex-col justify-center'>
					<span className='text-xs text-zinc-400'>team</span>
					<span className='text-2xl font-semibold'>Finance</span>
				</div>
				<button type='button' aria-label='collapse'>
					<BiDockLeft className='h-6 w-6 text-zinc-400' />
				</button>
			</div>
			<div>links</div>
		</div>
	);
};

export default Sidebar;
