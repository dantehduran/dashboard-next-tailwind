import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
);

export const options = {
	maintainAspectRatio: false,

	responsive: true,
	plugins: {
		legend: {
			display: false,
		},
		title: {
			display: false,
		},
	},
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
	labels,
	datasets: [
		{
			label: 'Total Spent',
			data: [10, 4, 63, 25, 80, 70, 23],
			backgroundColor: 'rgb(124, 58, 237)',
			borderRadius: 8,
		},
	],
};

export function BarChart() {
	return <Bar options={options} data={data} />;
}
