import style from './Link.module.scss';

function Link({ children, link, active, setActive }) {
	const scrollToSection = (elementRef) => {
		window.scrollTo({
			top: elementRef.current.offsetTop,
			behavior: 'smooth',
		});
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const onClickHandler = (link) => {
		setActive(link);
		if (link === 'about') {
			scrollToTop();
			return;
		}
		scrollToSection(link);
	};

	return (
		<div
			className={active === link ? `${style.block} ${style.active}` : style.block}
			onClick={() => onClickHandler(link)}
		>
			<div>
				<div className={style.border}></div>
			</div>
			<button className={style.link}>{children}</button>
		</div>
	);
}

export default Link;
