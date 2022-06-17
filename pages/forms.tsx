import { Input, Select } from '@/components/Input';
import type { NextPage } from 'next';

const Forms: NextPage = () => {
	return (
		<div className='p-4'>
			<h2 className='text-3xl font-bold text-zinc-700'>Forms</h2>
			<div className='mt-6  flex flex-col gap-6'>
				<div className='flex border-b-2 border-zinc-200 pb-12'>
					<div className='basis-2/5 '>
						<h3 className='text-xl font-semibold text-zinc-700'>
							Personal info
						</h3>
						<h4 className='text-sm text-zinc-500'>
							Provide your personal info
						</h4>
					</div>
					<div className='flex basis-3/5 flex-col gap-4'>
						<div className='basis-full'>
							<Input label='organization' />
						</div>
						<div className='flex gap-4'>
							<div className='basis-1/2'>
								<Input label='first name' />
							</div>
							<div className='basis-1/2'>
								<Input label='last name' />
							</div>
						</div>
					</div>
				</div>
				<div className='flex'>
					<div className='basis-2/5  '>
						<h3 className='text-xl font-semibold text-zinc-700'>
							Professional info
						</h3>
						<h4 className='text-sm text-zinc-500'>
							Provide your professional info
						</h4>
					</div>
					<div className='basis-3/5 '>
						<Select
							label='lenguage'
							options={['english', 'spanish', 'german', 'french']}
						/>
					</div>
				</div>
				<div className='flex'>
					<span>buttons</span>
				</div>
			</div>
		</div>
	);
};

export default Forms;
