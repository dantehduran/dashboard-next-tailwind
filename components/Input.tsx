interface Props {
	label: string;
}

const Input = ({ label }: Props) => {
	return (
		<div className='relative w-full'>
			<input
				type='text'
				id={label.replace(/\s+/g, '-')}
				autoComplete='new-password'
				placeholder={label}
				className='peer w-full rounded-lg border-2 border-zinc-100 bg-zinc-100 pt-4 pb-1 font-medium text-zinc-700 placeholder-transparent focus:border-2 focus:border-violet-500 focus:bg-white focus:outline-none'
			/>
			<label
				htmlFor={label.replace(/\s+/g, '-')}
				className='absolute left-3 top-1 cursor-text text-xs capitalize text-zinc-600  transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-3  peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-focus:top-1 peer-focus:left-3 peer-focus:text-xs'
			>
				{label}
			</label>
		</div>
	);
};

interface SelectProps {
	options: string[];
	label: string;
}
const Select = ({ options, label }: SelectProps) => {
	return (
		<div className='relative'>
			<select
				title={label}
				className='block w-full appearance-none rounded-lg border-2 border-zinc-100 bg-zinc-100 py-3  text-zinc-400  focus:border-violet-500 focus:bg-white focus:outline-none'
				id={label.replace(/\s+/g, '-')}
			>
				<option className='capitalize'>{label}</option>
				{options.map(option => (
					<option
						key={option}
						value={option}
						className='capitalize text-zinc-400'
					>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};
export { Input, Select };
