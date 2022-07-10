import Card from '@/components/Card';
import { BarChart } from '@/components/chart/BarChart';
import { DoughnutChart } from '@/components/chart/DoughnutChart';
import type { NextPage } from 'next';
import { BiAlbum, BiBarChart, BiDiamond, BiDollar } from 'react-icons/bi';

const Home: NextPage = () => {
	return (
		<div className='flex flex-col gap-6 p-4'>
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
			<div className='grid grid-cols-1 gap-6 md:grid-cols-7'>
				<div className='col-span-4 h-min rounded-lg border-2 border-zinc-200 p-4'>
					<div className='mb-4 flex flex-col'>
						<span className='text-lg font-semibold capitalize text-zinc-600'>
							total spent
						</span>
						<span className='text-2xl font-bold text-violet-600'>$965</span>
					</div>
					<div className=''>
						<BarChart />
					</div>
				</div>
				<div className='col-span-3  flex  flex-col rounded-lg border-2 border-zinc-200 p-4'>
					<span className='mb-3 text-lg font-semibold capitalize text-zinc-600'>
						Analytics
					</span>
					<div className=' h-80 '>
						<DoughnutChart />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
