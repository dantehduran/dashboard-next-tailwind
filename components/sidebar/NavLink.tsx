import Link from 'next/link';
import { useRouter } from 'next/router';
import { Link as PropLink } from '../../types/sidebar';
const NavLink = ({ Icon, label, route }: PropLink) => {
	const { pathname } = useRouter();
	return (
		<Link href={route}>
			<a
				className={`flex items-center space-x-2 rounded-lg p-2 hover:bg-zinc-700 hover:text-zinc-200 sidebar-collapsed:justify-center ${
					pathname === route && 'bg-zinc-700 text-zinc-200'
				}`}
			>
				<Icon />
				<span className='text-semibold sidebar-collapsed:hidden'>{label}</span>
			</a>
		</Link>
	);
};

export default NavLink;
