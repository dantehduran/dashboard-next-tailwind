import { Listbox } from '@headlessui/react';
import { useState } from 'react';
import { HiSelector } from 'react-icons/hi';

interface Props {
	label: string;
	type?: string;
}

const Input = ({ label, type = 'text' }: Props) => {
	return (
		<div className='relative w-full'>
			<input
				type={type}
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

const Dropdown = ({ label, options }: { label: string; options: string[] }) => {
	const [selectedOption, setSelectedOption] = useState(options[0]);

	return (
		<Listbox
			value={selectedOption}
			onChange={setSelectedOption}
			as='div'
			className='relative w-full'
		>
			<Listbox.Button className='peer flex w-full items-center justify-between rounded-lg border-2 border-zinc-100  bg-zinc-100 text-left font-medium capitalize text-zinc-700 placeholder-transparent focus:border-2 focus:border-violet-500 focus:bg-white focus:outline-none'>
				<span className='px-3 pt-4 pb-1'>{selectedOption}</span>
				<HiSelector className='mr-2 h-5 w-5 text-zinc-400' aria-hidden='true' />
			</Listbox.Button>
			<Listbox.Label className='absolute left-3 top-1 cursor-text text-xs capitalize text-zinc-600  transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-3  peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-focus:top-1 peer-focus:left-3 peer-focus:text-xs'>
				{label}
			</Listbox.Label>
			<Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10'>
				{options.map(option => (
					<Listbox.Option
						key={option}
						value={option}
						className='relative cursor-pointer select-none rounded-lg border-2 border-transparent py-2 px-3 capitalize text-zinc-700 hover:border-2 hover:border-violet-500'
					>
						{option}
					</Listbox.Option>
				))}
			</Listbox.Options>
		</Listbox>
	);
};

export { Input, Dropdown };
