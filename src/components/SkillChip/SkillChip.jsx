import style from './SkillChip.module.scss';

function SkillChip({ title }) {
	return <div className={style.chip}>{title}</div>;
}

export default SkillChip;
