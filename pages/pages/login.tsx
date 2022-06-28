import { Input } from '@/components/Input';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Login: NextPage = () => {
	const router = useRouter();
	return (
		<div className='flex h-screen flex-col items-center justify-center bg-zinc-800'>
			<div className='w-full rounded-lg bg-white py-4 px-6 md:w-2/5'>
				<div className='flex flex-col gap-4'>
					<h3 className='mb-4 text-xl font-bold text-violet-600'>
						Log in with your account
					</h3>
					<Input label='email' />
					<Input label='password' type='password' />

					<button
						className='rounded-lg bg-violet-600 px-3 py-2 font-semibold text-white'
						onClick={() => router.push('/')}
					>
						Login
					</button>
					<span className='cursor-pointer  text-sm text-violet-600'>
						Forgot your password?
					</span>
					<span className='text-sm text-zinc-700'>
						Don't have an account?{' '}
						<span className='cursor-pointer text-sm text-violet-600'>
							Sign Up Here
						</span>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Login;
