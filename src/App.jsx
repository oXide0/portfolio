import style from './App.module.scss';
import { MMenu } from './components/Menu/Menu';
import IconLink from './components/IconLink/IconLink';
import CustomCursor from './components/CustomCursor/CustomCursor';
import { MProjectBlock } from './components/ProjectBlock/ProjectBlock';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { textAnimation, blockAnimation, titleAnimation } from './utils/animations';
import { projectsData } from './utils/projectsData';

function App() {
	const skills = useRef(null);
	const projects = useRef(null);

	return (
		<div className='wrapper'>
			<CustomCursor />
			<motion.div className={style.left_col}>
				<motion.h1
					custom={1}
					variants={textAnimation}
					initial='hidden'
					whileInView='visible'
					className={style.title}
				>
					Nazar Korchevskyi
				</motion.h1>
				<motion.h2
					custom={2}
					variants={textAnimation}
					initial='hidden'
					whileInView='visible'
					className={style.subtitle}
				>
					Frontend Developer
				</motion.h2>
				<motion.p
					custom={3}
					variants={textAnimation}
					initial='hidden'
					whileInView='visible'
					className={style.info}
				>
					<span>I develop and maintain web applications.</span>
					<span>Bridging creativity and functionality in web development.</span>
				</motion.p>
				<MMenu
					custom={3}
					variants={textAnimation}
					initial='hidden'
					whileInView='visible'
					skills={skills}
					projects={projects}
				/>
				<motion.div
					custom={4}
					variants={textAnimation}
					initial='hidden'
					whileInView='visible'
					className={style.icons}
				>
					<IconLink url='https://github.com/oXide0' img='github_icon' />
					<IconLink url='https://www.linkedin.com/in/nazar-korchevskyi/' img='linkedin_icon' />
					<IconLink url='' img='mail_icon' type='mail' />
					<IconLink url='doc/Korchevskyi_Nazar_Frontend.pdf' img='pdf_icon' />
				</motion.div>
			</motion.div>
			<div className={style.block}></div>
			<div className={style.block_2}></div>
			<div className={style.col}>
				<motion.div
					variants={blockAnimation}
					viewport={{ amount: 0.2 }}
					initial='hidden'
					whileInView='visible'
					className={style.col__section_1}
				>
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
				</motion.div>
				<div className={style.col__section_2} ref={skills}>
					<motion.h1
						className={style.col__title}
						variants={titleAnimation}
						initial='hidden'
						whileInView='visible'
					>
						Skills
					</motion.h1>
					<motion.div
						variants={blockAnimation}
						initial='hidden'
						whileInView='visible'
						custom={2}
						className={style.section2__row}
					>
						<img src='img/react_icon.svg' alt='react_icon' className={style.skill_icon} />
						<img src='img/javascript_icon.svg' alt='javascript_icon' className={style.skill_icon} />
						<img src='img/sass_icon.svg' alt='sass_icon' className={style.skill_icon} />
						<img src='img/figma_icon.svg' alt='figma_icon' className={style.skill_icon} />
					</motion.div>
					<motion.div
						variants={blockAnimation}
						initial='hidden'
						whileInView='visible'
						custom={2}
						className={style.section2__row}
					>
						<img src='img/redux_icon.svg' alt='redux_icon' className={style.skill_icon} />
						<img src='img/typescript_icon.svg' alt='typescript_icon' className={style.skill_icon} />
						<img src='img/mui_icon.svg' alt='mui_icon' className={style.skill_icon} />
						<img src='img/git_icon.svg' alt='git_icon' className={style.skill_icon} />
					</motion.div>
				</div>
				<div className={style.col__section_3} ref={projects}>
					<motion.h1
						className={style.col__title}
						variants={titleAnimation}
						initial='hidden'
						whileInView='visible'
					>
						Projects
					</motion.h1>
					<div className={style.projects}>
						{projectsData.map((project) => (
							<MProjectBlock
								key={project.id}
								variants={blockAnimation}
								initial='hidden'
								whileInView='visible'
								custom={2}
								{...project}
							/>
						))}
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
