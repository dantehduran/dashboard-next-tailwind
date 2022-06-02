import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { useState } from 'react';
import Sidebar from '@/components/sidebar/Sidebar';
import { BiMenu } from 'react-icons/bi';

function MyApp({ Component, pageProps }: AppProps) {
	const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
	return (
		<div
			className={`relative flex h-screen space-x-4 overflow-hidden  bg-white p-2 ${
				isSidebarCollapsed ? ' sidebar-collapsed' : ' '
			}`}
		>
			<div className='sticky  hidden w-64 overflow-x-auto sidebar-collapsed:w-20 md:inline-block'>
				<Sidebar
					setIsSidebarCollapsed={setIsSidebarCollapsed}
					isSidebarCollapsed={isSidebarCollapsed}
				/>
			</div>

			<div className='relative flex-1 overflow-auto'>
				<Component {...pageProps} />
				<button
					aria-label='menu'
					className='fixed top-4 right-6 z-20 block md:hidden'
				>
					<BiMenu className='h-8 w-8 text-zinc-800' />
				</button>
			</div>
		</div>
	);
}

export default MyApp;
