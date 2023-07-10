import { useState } from 'react';
import Link from '../Link/Link';
import style from './Menu.module.scss';

function Menu({ skills, projects }) {
	const [activeLink, setActiveLink] = useState('about');

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
