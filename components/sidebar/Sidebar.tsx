import { HiOutlineColorSwatch } from 'react-icons/hi';
import { BiSidebar } from 'react-icons/bi';
import sidebarLinks from '../../config/SidebarLinks';
import NavLink from './NavLink';

interface Props {
	setIsSidebarCollapsed: (setIsSidebarCollapsed: boolean) => void;
	isSidebarCollapsed: boolean;
}

const Sidebar = ({ setIsSidebarCollapsed, isSidebarCollapsed }: Props) => {
	return (
		<div className='h-full overflow-hidden rounded-xl bg-zinc-800 text-zinc-400'>
			<div className='flex items-center justify-between py-4 px-4 text-zinc-200 sidebar-collapsed:justify-center'>
				<div className='flex space-x-2 sidebar-collapsed:hidden'>
					<HiOutlineColorSwatch className='h-12 w-12 rounded-lg bg-white text-zinc-800 ' />
					<div className='flex flex-1 flex-col justify-center'>
						<span className='text-xs text-zinc-400'>team</span>
						<span className='text-2xl font-semibold'>Finance</span>
					</div>
				</div>
				<button
					type='button'
					aria-label='collapse'
					onClick={() => {
						setIsSidebarCollapsed(!isSidebarCollapsed);
					}}
				>
					<BiSidebar className='h-6 w-6 shrink-0 text-zinc-400' />
				</button>
			</div>
			<div className='space-y-2 px-4 pt-4'>
				{sidebarLinks.map(link => (
					<NavLink key={link.label} {...link} />
				))}
			</div>
		</div>
	);
};

export default Sidebar;
