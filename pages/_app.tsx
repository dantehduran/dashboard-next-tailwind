import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Sidebar from '../components/Sidebar';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className='flex min-h-screen space-x-2 overflow-hidden bg-zinc-50 p-2'>
			<div className=' w-1/5 '>
				<Sidebar></Sidebar>
			</div>
			<div className='w-4/5'>
				<div>nav</div>
				<div>
					<Component {...pageProps} />
				</div>
			</div>
		</div>
	);
}

export default MyApp;
