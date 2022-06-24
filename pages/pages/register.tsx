import { Input } from '@/components/Input';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Register: NextPage = () => {
	const router = useRouter();
	return (
		<div className='flex h-screen flex-col items-center justify-center bg-zinc-800'>
			<div className='w-full rounded-lg bg-white py-4 px-6 sm:w-2/5'>
				<div className='flex flex-col gap-4'>
					<h3 className='mb-4 text-xl font-bold text-violet-800'>
						Set up your account
					</h3>
					<Input label='full name' />
					<Input label='email' />
					<Input label='password' type='password' />
					<Input label='confirm password' type='password' />
					<div className='mt-4'>
						<button
							className='rounded-lg bg-violet-800 px-3 py-2 font-semibold text-white'
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
