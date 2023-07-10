import { useEffect, useState } from 'react';
import Link from '../Link/Link';
import style from './Menu.module.scss';

function Menu({ skills, projects }) {
	const [activeLink, setActiveLink] = useState('about');

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= skills.current.offsetTop && window.scrollY < projects.current.offsetTop) {
				setActiveLink(skills);
			} else if (window.scrollY >= projects.current.offsetTop) {
				setActiveLink(projects);
			} else {
				setActiveLink('about');
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav className={style.nav}>
			<Link link='about' active={activeLink} setActive={setActiveLink}>
				about
			</Link>
			<Link link={skills} active={activeLink} setActive={setActiveLink}>
				skills
			</Link>
			<Link link={projects} active={activeLink} setActive={setActiveLink}>
				PROJECTS
			</Link>
		</nav>
	);
}

export default Menu;
