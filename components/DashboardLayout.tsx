import { useEffect } from 'react';
import Sidebar from '@/components/sidebar/Sidebar';
import { BiMenu } from 'react-icons/bi';
import useBreakpoint from '@/hooks/useBreakpoint';
import { useSidebar } from '@/context/uiStore';
import { useRouter } from 'next/router';

type DashboardLayoutProps = {
	children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
	const { pathname } = useRouter();
	const {
		isSidebarCollapsed,
		setIsSidebarCollapsed,
		isSidebarOpen,
		setIsSidebarOpen,
	} = useSidebar(state => state);
	const breakpoint = useBreakpoint();
	useEffect(() => {
		if (breakpoint !== 'md' && breakpoint !== 'sm') setIsSidebarOpen(false);
	}, [breakpoint]);
	if (pathname === '/pages/notfound') return children;
	return (
		<div
			className={`relative flex h-screen space-x-4 overflow-hidden bg-white p-2 ${
				isSidebarCollapsed ? ' sidebar-collapsed' : ' '
			} `}
		>
			<div
				className={`sticky overflow-x-auto sidebar-collapsed:w-20 md:inline-block md:w-64 ${
					isSidebarOpen ? 'flex-1' : 'hidden'
				}`}
			>
				<Sidebar />
			</div>
			<div
				className={`relative overflow-auto scrollbar-thin scrollbar-track-zinc-100 scrollbar-thumb-zinc-300  ${
					isSidebarOpen ? 'hidden' : 'flex-1'
				}`}
			>
				{children}
			</div>
			<button
				aria-label='menu'
				className='z-80 fixed top-4 right-6 block md:hidden'
				onClick={() => {
					setIsSidebarOpen(!isSidebarOpen);
					setIsSidebarCollapsed(false);
				}}
			>
				<BiMenu
					className={`h-8 w-8  ${
						isSidebarOpen ? 'text-zinc-200' : 'text-zinc-800'
					}`}
				/>
			</button>
		</div>
	);
};

export default DashboardLayout;
