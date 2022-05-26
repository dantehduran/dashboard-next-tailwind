import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Sidebar from '../components/sidebar/Sidebar';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
	const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
	return (
		<div
			className={`flex min-h-screen space-x-2 overflow-hidden bg-zinc-50 p-2 ${
				isSidebarCollapsed ? ' sidebar-collapsed' : ' '
			}`}
		>
			<div className='w-64 sidebar-collapsed:w-20'>
				<Sidebar
					setIsSidebarCollapsed={setIsSidebarCollapsed}
					isSidebarCollapsed={isSidebarCollapsed}
				/>
			</div>
			<div className='w-full'>
				<div>
					<Component {...pageProps} />
				</div>
			</div>
		</div>
	);
}

export default MyApp;
