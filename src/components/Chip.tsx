import { memo } from 'react';

interface ChipProps {
	children: string;
}

const Chip = memo(({ children }: ChipProps) => {
	return (
		<div className='bg-teal-400/20 rounded-2xl uppercase px-2 py-1 text-teal-200 font-medium text-xs'>
			{children}
		</div>
	);
});

export default Chip;
