const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcc').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('tailwind-scrollbar'),
		plugin(({ addVariant, e }) => {
			addVariant('sidebar-collapsed', ({ modifySelectors, separator }) => {
				modifySelectors(
					({ className }) =>
						`.sidebar-collapsed .${e(
							`sidebar-collapsed${separator}${className}`,
						)}`,
				);
			});
		}),
	],
};
