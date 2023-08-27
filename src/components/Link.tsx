import { memo } from 'react';
import { linksType } from '../utils/types';

interface LinkProps {
	children: string;
	path: React.MutableRefObject<HTMLElement | null>;
	value: linksType;
	activeLink: linksType;
	setActiveLink: (link: linksType) => void;
}

const blockClasses =
	'flex items-center gap-2 cursor-pointer hover:w-36 hover:text-slate-100 transition-all duration-200 group';
const borderClasses = 'border group-hover:border-slate-100';

const Link = memo(({ children, path, value, activeLink, setActiveLink }: LinkProps) => {
	const scrollToSection = (elementRef: React.MutableRefObject<HTMLElement | null>) => {
		if (elementRef.current) {
			window.scrollTo({
				top: elementRef.current.offsetTop,
				behavior: 'smooth',
			});
		}
	};

	const onClickHandler = () => {
		if (path) {
			scrollToSection(path);
			setActiveLink(value);
		}
	};

	return (
		<div
			className={
				activeLink === value ? `${blockClasses} w-36 text-slate-100` : `${blockClasses} w-24 text-slate-400`
			}
			onClick={onClickHandler}
		>
			<div className='w-full'>
				<p
					className={
						activeLink === value ? `${borderClasses} border-slate-100` : `${borderClasses} border-slate-400`
					}
				></p>
			</div>
			<button className='uppercase font-semibold text-xs tracking-widest w-10'>{children}</button>
		</div>
	);
});

export default Link;
