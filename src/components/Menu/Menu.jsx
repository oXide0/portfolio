import { useEffect, useState, forwardRef } from 'react';
import Link from '../Link/Link';
import style from './Menu.module.scss';
import { motion } from 'framer-motion';

export const Menu = forwardRef(function Menu({ skills, projects }, ref) {
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
		<nav ref={ref} className={style.nav}>
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
});

export const MMenu = motion(Menu);
