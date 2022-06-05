import {
	BiCog,
	BiGroup,
	BiLayout,
	BiPackage,
	BiSpreadsheet,
} from 'react-icons/bi';
import { Link } from '../types/sidebar';

const links: Link[] = [
	{
		label: 'Dashboard',
		route: '/',
		Icon: () => <BiLayout className='h-6 w-6 shrink-0' />,
	},
	{
		label: 'Table',
		route: '/table',
		Icon: () => <BiSpreadsheet className='h-6 w-6 shrink-0' />,
		sublinks: [
			{
				label: 'Simple Table',
				route: '/table/simple',
			},
			{
				label: 'Full Responsive Table',
				route: '/table/responsive',
			},
			{
				label: 'Grid Table',
				route: '/table/grid',
			},
		],
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
	{
		label: 'Settings',
		Icon: () => <BiCog className='h-6 w-6 shrink-0' />,
		route: '/settings',
		sublinks: [
			{
				label: 'Profile',
				route: '/settings/profile',
			},
			{
				label: 'Config',
				route: '/settings/config',
			},
		],
	},
];
export default links;
