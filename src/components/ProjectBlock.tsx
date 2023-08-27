import { memo } from 'react';
import Chip from './Chip';
import { GoArrowUpRight } from 'react-icons/go';

interface ProjectBlockProps {
	title: string;
	text: string;
	skills: string[];
	url: string;
	href: string;
}

const ProjectBlock = memo(({ title, text, skills, url, href }: ProjectBlockProps) => {
	const redirectToPage = () => {
		window.open(href, '_blank');
	};

	return (
		<div
			className='flex gap-4 cursor-pointer p-4 rounded-lg transition-all duration-200 hover:bg-slate-100/10 group relative'
			onClick={redirectToPage}
		>
			<GoArrowUpRight size='1.5em' className='absolute right-3 text-slate-400 group-hover:text-slate-100' />
			<div className='w-96'>
				<img src={`img/${url}.png`} alt='project' className='rounded-md w-full' />
			</div>
			<div>
				<h1 className='text-slate-100 font-medium text-lg group-hover:text-teal-300'>{title}</h1>
				<p className='text-slate-400'>{text}</p>
				<div className='flex gap-2 flex-wrap pt-3'>
					{skills.map((skill, index) => (
						<Chip key={index}>{skill}</Chip>
					))}
				</div>
			</div>
		</div>
	);
});

export default ProjectBlock;
