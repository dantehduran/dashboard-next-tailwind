import Card from '@/components/Card';
import type { NextPage } from 'next';
import { BiAlbum, BiBarChart, BiDiamond, BiDollar } from 'react-icons/bi';

const Home: NextPage = () => {
	return (
		<div className='flex flex-col p-4'>
			<div className='grid grid-cols-2 gap-6 lg:grid-cols-4'>
				<Card
					label='all spending'
					total={565}
					color='bg-green-100'
					icon={() => <BiDiamond className='h-8 w-8 text-green-600' />}
				/>
				<Card
					label='weekly revenue'
					total={235}
					color='bg-violet-100'
					icon={() => <BiBarChart className='h-8 w-8 text-violet-600' />}
				/>
				<Card
					label='earnings'
					total={392}
					color='bg-rose-100'
					icon={() => <BiDollar className='h-8 w-8 text-rose-600' />}
				/>
				<Card
					label='new clients'
					total={122}
					color='bg-orange-100'
					icon={() => <BiAlbum className='h-8 w-8 text-orange-600' />}
				/>
			</div>
		</div>
	);
};

export default Home;
