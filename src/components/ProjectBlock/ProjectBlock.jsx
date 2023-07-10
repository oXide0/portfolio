import style from './ProjectBlock.module.scss';
import SkillChip from '../SkillChip/SkillChip';
import { v1 } from 'uuid';

function ProjectBlock({ title, text, skills, url, href }) {
	const redirectToPage = () => {
		window.location.href = href;
	};

	return (
		<div className={style.project__block} onClick={redirectToPage}>
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
}

export default ProjectBlock;
