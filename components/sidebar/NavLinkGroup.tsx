import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { Link as PropLink } from '../../types/sidebar';

const NavLinkGroup = ({ label, Icon, sublinks, route }: PropLink) => {
	const { pathname } = useRouter();
	const [isOpen, setIsOpen] = useState(false);
	const handleOpen = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<button
				className={`flex w-full items-center justify-between space-x-2 rounded-lg p-2 hover:bg-zinc-700 hover:text-zinc-200 sidebar-collapsed:justify-center ${
					isOpen &&
					pathname.includes(route) &&
					isOpen &&
					'bg-zinc-700 text-zinc-200 '
				}`}
				onClick={() => handleOpen()}
			>
				<div className='flex space-x-2'>
					<Icon />
					<span className='text-semibold  sidebar-collapsed:hidden'>
						{label}
					</span>
				</div>
				{!isOpen ? (
					<BiChevronDown className='h-4 w-4 sidebar-collapsed:hidden' />
				) : (
					<BiChevronUp className='h-4 w-4 sidebar-collapsed:hidden' />
				)}
			</button>
			<div className='relative block pb-2 sidebar-collapsed:hidden'>
				<div
					className={`ml-4 space-y-2 border-l-4 border-zinc-700 ${
						!isOpen && 'hidden'
					}`}
				>
					{sublinks &&
						sublinks.map(link => (
							<Link href={link.route} key={link.label}>
								<a className='flex pl-5'>
									<span>{link.label}</span>
								</a>
							</Link>
						))}
				</div>
			</div>
		</>
	);
};

export default NavLinkGroup;
