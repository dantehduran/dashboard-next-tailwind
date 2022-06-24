import { Input } from '@/components/Input';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Register: NextPage = () => {
	const router = useRouter();
	return (
		<div className='flex h-screen flex-col items-center justify-center bg-zinc-800'>
			<div className='w-full rounded-lg bg-white py-4 px-6 sm:w-2/5'>
				<div className='flex flex-col gap-4'>
					<h3 className='mb-4 text-xl font-bold text-violet-600'>
						Set up your account
					</h3>
					<Input label='full name' />
					<Input label='email' />
					<Input label='password' type='password' />
					<Input label='confirm password' type='password' />
					<div className='flex items-center'>
						<input
							type='checkbox'
							className='mr-2 rounded border-zinc-700  text-violet-600 focus:ring-violet-600'
						/>
						<span className='text-zinc-700'>
							I agree with{' '}
							<span className='cursor-pointer font-semibold text-violet-600'>
								Terms and Privacy Policy
							</span>
						</span>
					</div>
					<div className='mt-4'>
						<button
							className='rounded-lg bg-violet-600 px-3 py-2 font-semibold text-white'
							onClick={() => router.push('/')}
						>
							Continue
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
