import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { useState } from 'react';
import Sidebar from '@/components/sidebar/Sidebar';

function MyApp({ Component, pageProps }: AppProps) {
	const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
	return (
		<div
			className={`flex min-h-screen space-x-4 overflow-hidden bg-white p-2 ${
				isSidebarCollapsed ? ' sidebar-collapsed' : ' '
			}`}
		>
			<div className='w-64 sidebar-collapsed:w-20'>
				<Sidebar
					setIsSidebarCollapsed={setIsSidebarCollapsed}
					isSidebarCollapsed={isSidebarCollapsed}
				/>
			</div>
			<div className='relative flex-1 overflow-x-hidden'>
				<Component {...pageProps} />
			</div>
		</div>
	);
}

export default MyApp;
