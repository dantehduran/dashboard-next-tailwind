import Link from 'next/link';

interface Props {
	label: string;
	route: string;
	Icon: React.FunctionComponent;
}
const NavLink = ({ Icon, label, route }: Props) => {
	return (
		<Link href={route}>
			<a className='flex items-center space-x-2 rounded-lg p-2 hover:bg-zinc-700 hover:text-zinc-200 sidebar-collapsed:justify-center'>
				<Icon />
				<span className='text-semibold sidebar-collapsed:hidden'>{label}</span>
			</a>
		</Link>
	);
};

export default NavLink;
