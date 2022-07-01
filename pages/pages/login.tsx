import { Input } from '@/components/Input';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Login: NextPage = () => {
	const router = useRouter();
	return (
		<div className='flex h-screen flex-col items-center justify-center bg-zinc-800'>
			<div className='w-full rounded-lg bg-white py-4 px-6 shadow-md shadow-violet-400  md:w-2/5'>
				<div className='flex flex-col gap-4'>
					<h3 className='my-4 text-center text-2xl font-bold text-violet-600'>
						Log in with your account
					</h3>
					<div className='flex space-x-4'>
						<button className='flex w-full items-center justify-center gap-2 rounded-lg border-2 border-zinc-100 py-2 px-3 font-semibold text-zinc-800 hover:bg-zinc-100'>
							<FcGoogle className='h-5 w-5' />
							Sign in with Google
						</button>
						<button className='flex w-full items-center justify-center gap-2 rounded-lg border-2 border-zinc-100 py-2 px-3 font-semibold text-zinc-800 hover:bg-zinc-100'>
							<FaFacebookF className='h-5 w-5 text-blue-600' />
							Sign in with Facebook
						</button>
					</div>
					<div className='my-2 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-zinc-200 after:mt-0.5 after:flex-1 after:border-t after:border-zinc-200'>
						<p className='mx-4 mb-0 text-center font-semibold text-zinc-400'>
							Or
						</p>
					</div>
					<Input label='email' />
					<Input label='password' type='password' />
					<div className='flex items-center justify-between'>
						<div className='flex items-center text-sm text-zinc-500'>
							<input
								type='checkbox'
								className='mr-2 rounded border-zinc-500  text-violet-600 focus:ring-violet-600'
							/>
							Remember me
						</div>
						<span className='cursor-pointer  text-sm text-violet-600'>
							Forgot your password?
						</span>
					</div>
					<button
						className='rounded-lg bg-violet-600 px-3 py-2 font-semibold text-white hover:bg-violet-800'
						onClick={() => router.push('/')}
					>
						Login
					</button>

					<span className='text-center text-sm text-zinc-400'>
						Don't have an account?{' '}
						<button
							className=' text-violet-600'
							onClick={() => router.push('/pages/register')}
						>
							Create an account
						</button>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Login;
