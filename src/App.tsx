import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { IconContext } from 'react-icons';
import { AiFillFilePdf, AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import CustomCursor from './components/CustomCursor';
import ExperienceBlock from './components/ExperienceBlock';
import Link from './components/Link';
import ProjectBlock from './components/ProjectBlock';
import { blockAnimation, textAnimation } from './utils/animation';
import { projectsData, experienceData } from './utils/data';
import { linksType } from './utils/types';

const tooltipClasses =
    'bg-slate-500 text-slate-100 text-sm text-center p-1 rounded-md left-24 bottom-5 absolute z-10';

const App = () => {
    const about = useRef<HTMLDivElement | null>(null);
    const experience = useRef<HTMLDivElement | null>(null);
    const projects = useRef<HTMLDivElement | null>(null);
    const [activeLink, setActiveLink] = useState<linksType>('about');
    const [tooltipActive, setTooltipActive] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText('nazar.korchevskyi1@gmail.com');
        setTooltipActive(true);
        setTimeout(() => {
            setTooltipActive(false);
        }, 1000);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (experience.current && projects.current) {
                if (
                    window.scrollY >= experience.current.offsetTop &&
                    window.scrollY < projects.current.offsetTop &&
                    window.scrollY + 200 < projects.current.offsetTop
                ) {
                    setActiveLink('experience');
                } else if (window.scrollY + 200 >= projects.current.offsetTop) {
                    setActiveLink('projects');
                } else {
                    setActiveLink('about');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='max-w-7xl mx-auto px-4 flex max-lg:flex-col max-lg:px-10'>
            <CustomCursor />
            <div className='fixed pt-40 max-lg:static'>
                <motion.h1
                    custom={1}
                    variants={textAnimation}
                    initial='hidden'
                    whileInView='visible'
                    className='text-slate-200 font-bold text-5xl'
                >
                    Nazar Korchevskyi
                </motion.h1>
                <motion.p
                    custom={2}
                    variants={textAnimation}
                    initial='hidden'
                    whileInView='visible'
                    className='text-slate-200 text-2xl pt-2'
                >
                    Frontend Developer
                </motion.p>
                <motion.p
                    custom={3}
                    variants={textAnimation}
                    initial='hidden'
                    whileInView='visible'
                    className='text-slate-400 text-lg pt-2 w-96'
                >
                    I develop web applications combining creativity and functionality.
                </motion.p>
                <motion.div
                    custom={3}
                    variants={textAnimation}
                    initial='hidden'
                    whileInView='visible'
                    className='flex flex-col gap-6 pt-20'
                >
                    <Link
                        path={about}
                        value='about'
                        activeLink={activeLink}
                        setActiveLink={setActiveLink}
                    >
                        about
                    </Link>
                    <Link
                        path={experience}
                        value='experience'
                        activeLink={activeLink}
                        setActiveLink={setActiveLink}
                    >
                        experience
                    </Link>
                    <Link
                        path={projects}
                        value='projects'
                        activeLink={activeLink}
                        setActiveLink={setActiveLink}
                    >
                        projects
                    </Link>
                </motion.div>
                <IconContext.Provider value={{ size: '2em' }}>
                    <motion.div
                        custom={4}
                        variants={textAnimation}
                        initial='hidden'
                        whileInView='visible'
                        className='flex gap-4 pt-32'
                    >
                        <a
                            href='https://github.com/oXide0'
                            target='_blank'
                            className='text-slate-400 hover:text-slate-100'
                        >
                            <AiFillGithub />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/nazar-korchevskyi/'
                            target='_blank'
                            className='text-slate-400 hover:text-slate-100'
                        >
                            <AiFillLinkedin />
                        </a>
                        <button
                            onClick={copyToClipboard}
                            className='text-slate-400 hover:text-slate-100'
                        >
                            <span className={tooltipActive ? tooltipClasses : 'hidden'}>
                                Copied
                            </span>
                            <AiFillMail />
                        </button>
                        <a
                            href='doc/Korchevskyi_Nazar_Developer.pdf'
                            target='_blank'
                            className='text-slate-400 hover:text-slate-100'
                        >
                            <AiFillFilePdf />
                        </a>
                    </motion.div>
                </IconContext.Provider>
            </div>
            <div className='w-80 h-80 opacity-60 rounded-full bg-teal-600 shadow-2xl shadow-teal-600 fixed top-0 left-0 pointer-events-none -z-10 blur-3xl'></div>
            <div className='w-80 h-80 opacity-60 rounded-full bg-teal-600 shadow-2xl shadow-teal-600 fixed bottom-0 right-0 pointer-events-none -z-10 blur-3xl'></div>
            <div className='pl-600 max-xl:pl-500 max-lg:pl-0'>
                <motion.div
                    variants={blockAnimation}
                    initial='hidden'
                    whileInView='visible'
                    ref={about}
                    className='pt-40'
                >
                    <h2 className='text-slate-100 text-4xl font-bold uppercase text-center'>
                        About me
                    </h2>
                    <p className='text-slate-300 text-md pt-10'>
                        Starting in 2021, I got acquainted with web development. I started with HTML
                        and CSS😄. After studying these technologies and writing a few websites, I
                        started to learn the web fully, and I really liked it. Of course, it was
                        hard at times, but I went from HTML and CSS to TypeScript and React.
                    </p>
                    <p className='text-slate-300 text-md pt-6'>
                        Today I consider myself a full-fledged web developer and I am eager to
                        contribute to the success of dynamic and innovative projects. I'm looking
                        forward to working with experienced professionals and taking on new
                        challenges that will allow me to expand my knowledge and experience in web
                        development.
                    </p>
                    <p className='text-slate-300 text-md pt-6'>
                        In the future, I would like to develop in the direction of web development
                        and participate in interesting projects.
                    </p>
                </motion.div>
                <motion.div
                    variants={blockAnimation}
                    initial='hidden'
                    whileInView='visible'
                    className='flex flex-col gap-5 pt-44'
                    ref={experience}
                >
                    <h2 className='text-slate-100 text-4xl font-bold uppercase text-center'>
                        Experience
                    </h2>
                    {experienceData.map((experience) => (
                        <ExperienceBlock key={experience.id} {...experience} />
                    ))}
                </motion.div>
                <motion.div
                    variants={blockAnimation}
                    initial='hidden'
                    whileInView='visible'
                    className='pt-44 pb-16'
                    ref={projects}
                >
                    <h2 className='text-slate-100 text-4xl font-bold uppercase text-center'>
                        My Projects
                    </h2>
                    <div className='flex flex-col gap-10 pt-10'>
                        {projectsData.map((project) => (
                            <ProjectBlock key={project.id} {...project} />
                        ))}
                    </div>
                    <div className='pt-10 text-center'>
                        <a
                            className='text-slate-100 text-2xl hover:text-teal-300 hover:underline'
                            href='https://github.com/oXide0?tab=repositories'
                        >
                            More of my projects
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default App;
