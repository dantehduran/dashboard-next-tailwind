interface Props {
	label: string;
	icon: React.FunctionComponent;
	total: number;
	color: string;
}
const Card = ({ label, icon: Icon, total, color }: Props) => {
	return (
		<div className='flex w-full flex-col items-center justify-center gap-3 rounded-lg border-2 border-zinc-200 py-6 px-4 sm:flex-row md:justify-start'>
			<div className={`${color} rounded-full  p-2 `}>
				<Icon />
			</div>
			<div className='flex flex-col justify-center'>
				<span className='text-sm font-bold capitalize text-zinc-400'>
					{label}
				</span>
				<span className='text-center font-semibold text-zinc-700 sm:text-start'>
					${total}
				</span>
			</div>
		</div>
	);
};

export default Card;
