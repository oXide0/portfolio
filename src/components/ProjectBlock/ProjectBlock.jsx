import style from './ProjectBlock.module.scss';
import SkillChip from '../SkillChip/SkillChip';
import { v1 } from 'uuid';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

export const ProjectBlock = forwardRef(function ProjectBlock({ title, text, skills, url, href }, ref) {
	const redirectToPage = () => {
		window.open(href, '_blank');
	};

	return (
		<div className={style.project__block} onClick={redirectToPage} ref={ref}>
			<div className={style.block__img}>
				<img src={`img/${url}.png`} alt='project' className={style.img} />
			</div>
			<div className={style.block__content}>
				<h1 className={style.block__title}>{title}</h1>
				<p className={style.block__text}>{text}</p>
				<div className={style.block__skills}>
					{skills.map((skill) => (
						<SkillChip key={v1()} title={skill} />
					))}
				</div>
			</div>
		</div>
	);
});

export const MProjectBlock = motion(ProjectBlock);
