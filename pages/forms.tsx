import { Dropdown, Input } from '@/components/Input';
import type { NextPage } from 'next';

const Forms: NextPage = () => {
	return (
		<div className='p-4'>
			<h2 className='text-3xl font-bold text-zinc-700'>Forms</h2>
			<div className='mt-6  flex flex-col gap-6'>
				<div className='flex flex-col gap-4 border-b-2 border-zinc-200 pb-12 sm:flex-row'>
					<div className='sm:basis-2/5'>
						<h3 className='text-xl font-semibold text-zinc-700'>
							Personal info
						</h3>
						<h4 className='text-sm text-zinc-500'>
							Provide your personal info
						</h4>
					</div>
					<div className='flex flex-col gap-4 sm:basis-3/5'>
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
				<div className='flex flex-col gap-4 sm:flex-row'>
					<div className='basis-2/5  '>
						<h3 className='text-xl font-semibold text-zinc-700'>
							Professional info
						</h3>
						<h4 className='text-sm text-zinc-500'>
							Provide your professional info
						</h4>
					</div>
					<div className='flex basis-3/5 flex-col gap-4'>
						<Dropdown
							label='lenguage'
							options={['english', 'spanish', 'german', 'french']}
						/>
						<Input label='type of employment' />
						<Input label='profession' />
						<Input label='proficiency level' />
					</div>
				</div>
				<div className='flex justify-end'>
					<button className='rounded-lg border bg-zinc-50  px-3 py-2 font-semibold capitalize'>
						skip
					</button>
					<button
						type='button'
						className='ml-4 rounded-lg bg-violet-600 px-3  py-2 font-semibold capitalize text-zinc-100'
					>
						save & continue
					</button>
				</div>
			</div>
		</div>
	);
};

export default Forms;
