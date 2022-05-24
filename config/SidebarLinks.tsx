import { BiGroup, BiLayout, BiPackage } from 'react-icons/bi';

interface Link {
	label: string;
	route: string;
	Icon: React.FunctionComponent;
}
const links: Link[] = [
	{
		label: 'Dashboard',
		route: '/',
		Icon: () => <BiLayout className='h-6 w-6 shrink-0' />,
	},
	{
		label: 'Team',
		route: '/team',
		Icon: () => <BiGroup className='h-6 w-6 shrink-0' />,
	},
	{
		label: 'Projects',
		route: '/projects',
		Icon: () => <BiPackage className='h-6 w-6 shrink-0' />,
	},
];
export default links;
