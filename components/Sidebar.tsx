import { HiOutlineColorSwatch } from 'react-icons/hi';
import { BiSidebar, BiLayout } from 'react-icons/bi';

interface Props {
	setIsSidebarCollapsed: (setIsSidebarCollapsed: boolean) => void;
	isSidebarCollapsed: boolean;
}

const Sidebar = ({ setIsSidebarCollapsed, isSidebarCollapsed }: Props) => {
	return (
		<div className='h-full overflow-hidden rounded-xl bg-zinc-800 text-zinc-400'>
			<div className='flex items-center space-x-2 py-4 px-4 text-zinc-200'>
				<HiOutlineColorSwatch className='h-12 w-12 rounded-lg bg-white text-zinc-800 sidebar-collapsed:hidden' />
				<div className='flex flex-1 flex-col justify-center sidebar-collapsed:hidden'>
					<span className='text-xs text-zinc-400'>team</span>
					<span className='text-2xl font-semibold'>Finance</span>
				</div>
				<button
					type='button'
					aria-label='collapse'
					onClick={() => {
						setIsSidebarCollapsed(!isSidebarCollapsed);
					}}
				>
					<BiSidebar className='h-6 w-6 text-zinc-400' />
				</button>
			</div>
			<div className='px-4 pt-4'>
				<a
					href='/'
					className='flex items-center space-x-2 rounded-lg p-2 hover:bg-zinc-700 hover:text-zinc-200'
				>
					<BiLayout className='h-5 w-5' />
					<span className='text-semibold '>Dashboard</span>
				</a>
			</div>
		</div>
	);
};

export default Sidebar;
