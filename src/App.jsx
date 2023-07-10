import style from './App.module.scss';
import Menu from './components/Menu/Menu';
import IconLink from './components/IconLink/IconLink';
import CustomCursor from './components/CustomCursor/CustomCursor';
import ProjectBlock from './components/ProjectBlock/ProjectBlock';
import { useRef } from 'react';

function App() {
	const skills = useRef(null);
	const projects = useRef(null);

	return (
		<div className='wrapper'>
			<CustomCursor />
			<div className={style.left_col}>
				<h1 className={style.title}>Nazar Korchevskyi</h1>
				<h2 className={style.subtitle}>Frontend Developer</h2>
				<p className={style.info}>
					I develop and maintain web applications. Bridging creativity and functionality in web development.
				</p>
				<Menu skills={skills} projects={projects} />
				<div className={style.icons}>
					<IconLink url='https://github.com/oXide0' img='github_icon' />
					<IconLink url='https://www.linkedin.com/in/nazar-korchevskyi/' img='linkedin_icon' />
					<IconLink url='' img='mail_icon' type='mail' />
					<IconLink url='doc/CV_EN.pdf' img='pdf_icon' />
				</div>
			</div>
			<div className={style.block}></div>
			<div className={style.block_2}></div>
			<div className={style.col}>
				<div className={style.col__section_1}>
					<p className={style.info__text}>
						My journey into the enchanting world of{' '}
						<span className={style.highlist__text}>web development</span> commenced in the year 2023🚀.
						Prior to that, I had dabbled in programming through school and computer courses, yet had never
						taken the plunge into the realm of actual{' '}
						<span className={style.highlist__text}>software development</span>. Just like countless others,
						I embarked on this adventure with <span className={style.highlist__text}>HTML & CSS</span>,
						crafting responsive <span className={style.highlist__text}>landing pages</span> that soon became
						my creative playground. As time went on, I delved into the depths of{' '}
						<span className={style.highlist__text}>SCSS</span>, weaving intricate designs for numerous
						grandiose <span className={style.highlist__text}>landing pages</span>. In retrospect, I do
						lament😒 not having delved into the enchanting world of{' '}
						<span className={style.highlist__text}>JavaScript</span> earlier, for it could have opened up a
						whole new universe of possibilities.
					</p>
					<p className={style.info__text}>
						Now, my primary aspiration is to secure a job🏢 where I can unveil the depth of{' '}
						<span className={style.highlist__text}>my skills</span>. The prospect of collaborating with
						seasoned professionals and embracing novel challenges excites me immensely. These experiences
						will undoubtedly facilitate{' '}
						<span className={style.highlist__text}>
							the expansion of my knowledge and expertise in frontend development
						</span>
						. Furthermore, I remain resolute in my pursuit of mastering contemporary technologies,{' '}
						<span className={style.highlist__text}>including TypeScript, Java, NextJS, Spring</span>, and a
						myriad of other captivating tools.
					</p>
					<p className={style.info__text}>
						Every step🦶 I take along this path fills me with profound contentment, as I know that countless
						captivating endeavors await me. I extend my gratitude🙏 for your attention and invite you to
						explore my experience and projects below👇.
					</p>
				</div>
				<div className={style.col__section_2} ref={skills}>
					<h1 className={style.col__title}>Skills</h1>
					<div className={style.section2__row}>
						<img src='img/react_icon.svg' alt='react_icon' className={style.skill_icon} />
						<img src='img/javascript_icon.svg' alt='javascript_icon' className={style.skill_icon} />
						<img src='img/sass_icon.svg' alt='sass_icon' className={style.skill_icon} />
						<img src='img/figma_icon.svg' alt='figma_icon' className={style.skill_icon} />
					</div>
					<div className={style.section2__row}>
						<img src='img/redux_icon.svg' alt='redux_icon' className={style.skill_icon} />
						<img src='img/typescript_icon.svg' alt='typescript_icon' className={style.skill_icon} />
						<img src='img/mui_icon.svg' alt='mui_icon' className={style.skill_icon} />
						<img src='img/git_icon.svg' alt='git_icon' className={style.skill_icon} />
					</div>
				</div>
				<div className={style.col__section_3} ref={projects}>
					<h1 className={style.col__title}>Projects</h1>
					<div className={style.projects}>
						<ProjectBlock
							title='Delivery App'
							text='The project allows users to register and access stores, where they can choose a store, then add goods to the cart (get data from the database). The project also has such pages as History of orders and Coupons.'
							skills={['React', 'Redux Toolkit', 'RTQ', 'MUI', 'Json-Server']}
							url='delivery_app'
							href='https://silly-stardust-cefd5f.netlify.app/'
						/>
						<ProjectBlock
							title='Movie Search App'
							text='An app that allows you to see a list of popular movies. Find the ones you like and add them to your list. The goal was also to practice with RTQ and internalization of the application.'
							skills={['React', 'Redux Toolkit', 'RTQ', 'MUI', 'TMDB-api', 'i18n-react']}
							url='movie_app'
							href='https://649f47084d7516437a2339b0--meek-croissant-0faefc.netlify.app/'
						/>
						<ProjectBlock
							title='Note App'
							text='The project is based on Google Keep. Here you can create notes and move them to different sections. The main goal was to practice with new technologies.'
							skills={['React', 'Redux Toolkit', 'MUI', 'SCSS']}
							url='note_app'
							href='https://64941003576c7e007df4496f--glittery-fenglisu-9dec9c.netlify.app/'
						/>
					</div>
				</div>
				<div className={style.footer__title}>
					<a href='https://github.com/oXide0?tab=repositories'>More of my projects</a>
				</div>
			</div>
		</div>
	);
}

export default App;
