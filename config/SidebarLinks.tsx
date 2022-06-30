import {
	BiBook,
	BiCog,
	BiColumns,
	BiGroup,
	BiLayout,
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
		Icon: () => <BiColumns className='h-6 w-6 shrink-0' />,
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
		label: 'Pagination',
		route: '/pagination',
		Icon: () => <BiBook className='h-6 w-6 shrink-0' />,
	},
	{
		label: 'Team',
		route: '/team',
		Icon: () => <BiGroup className='h-6 w-6 shrink-0' />,
	},
	{
		label: 'Forms',
		route: '/forms',
		Icon: () => <BiSpreadsheet className='h-6 w-6 shrink-0' />,
	},
	{
		label: 'Pages',
		Icon: () => <BiCog className='h-6 w-6 shrink-0' />,
		route: '/settings',
		sublinks: [
			{
				label: 'Register',
				route: '/pages/register',
			},
			{
				label: 'Login',
				route: '/pages/login',
			},
			{
				label: '404',
				route: '/404',
			},
		],
	},
];
export default links;
