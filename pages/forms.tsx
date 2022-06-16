import type { NextPage } from 'next';

const Forms: NextPage = () => {
	return (
		<div className='p-4'>
			<h2 className='text-3xl font-bold text-zinc-700'>Forms</h2>
			<div className='mt-4  flex flex-col'>
				<div className='flex'>
					<div className='basis-2/5 '>
						<h3 className='text-xl font-semibold text-zinc-700'>
							Personal info
						</h3>
						<h4 className='text-sm text-zinc-500'>
							Provide your personal info
						</h4>
					</div>
					<div className='flex basis-3/5 flex-col gap-2'>
						<div className='basis-full'>
							<div className='relative w-full'>
								<input
									type='text'
									id='organization'
									autoComplete='new-password'
									placeholder='organization'
									className='peer h-12 w-full rounded-lg border-2 border-transparent bg-zinc-100 font-medium text-zinc-700 placeholder-transparent focus:border-2 focus:border-violet-500 focus:outline-none'
								/>
								<label
									htmlFor='organization'
									className='absolute left-3 top-0 text-xs text-gray-600 transition-all peer-placeholder-shown:top-3  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0  peer-focus:left-3 peer-focus:text-xs'
								>
									Organization
								</label>
							</div>
						</div>
						<div className='flex gap-2'>
							<div className='basis-1/2'>
								<div className='relative w-full'>
									<input
										type='text'
										id='first-name'
										autoComplete='new-password'
										placeholder='organization'
										className='peer h-12 w-full rounded-lg border-2 border-transparent bg-zinc-100 font-medium text-zinc-700 placeholder-transparent focus:border-2 focus:border-violet-500 focus:outline-none'
									/>
									<label
										htmlFor='first-name'
										className='absolute left-3 top-0 text-xs text-gray-600 transition-all peer-placeholder-shown:top-3  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0  peer-focus:left-3 peer-focus:text-xs'
									>
										Organization
									</label>
								</div>
							</div>
							<div className='basis-1/2'>
								<div className='relative w-full'>
									<input
										type='text'
										id='last-name'
										autoComplete='new-password'
										placeholder='organization'
										className='peer h-12 w-full rounded-lg border-2 border-transparent bg-zinc-100 font-medium text-zinc-700 placeholder-transparent focus:border-2 focus:border-violet-500 focus:outline-none'
									/>
									<label
										htmlFor='last-name'
										className='absolute left-3 top-0 text-xs text-gray-600 transition-all peer-placeholder-shown:top-3  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0  peer-focus:left-3 peer-focus:text-xs'
									>
										Organization
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='flex'>
					<div className='basis-2/5 bg-blue-300 '>
						<h3 className='text-xl font-semibold text-zinc-700'>
							Professional info
						</h3>
						<h4 className='text-sm text-zinc-500'>
							Provide your professional info
						</h4>
					</div>
					<div className='basis-3/5 bg-red-400'>inputs</div>
				</div>
				<div className='flex'>
					<span>buttons</span>
				</div>
			</div>
		</div>
	);
};

export default Forms;
