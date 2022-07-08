import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			display: true,
			// position: 'bottom',
		},
		title: {
			display: false,
		},
	},
};

export const data = {
	labels: ['Sales', 'Orders', 'Returns'],
	datasets: [
		{
			label: '# of Votes',
			data: [12, 19, 3],
			backgroundColor: [
				'rgb(249, 115, 22)',
				'rgb(13, 148, 136)',
				'rgb(2, 132, 199)',
			],
		},
	],
};

export function DoughnutChart() {
	return <Doughnut data={data} options={options} />;
}
