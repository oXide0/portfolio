'use client';

import { motion } from 'framer-motion';
import { blockAnimation, textAnimation } from './lib/animation';
import { Cursor } from './ui/cursor';
import { Link as UiLink } from './ui/link';
import { useEffect, useRef, useState } from 'react';
import { AiFillFilePdf, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';
import { experienceData, projectsData } from './lib/data';
import { ExperienceCard } from './ui/experienceCard';
import { ProjectCard } from './ui/projectCard';

export default function Home() {
    const [activeLink, setActiveLink] = useState<'about' | 'experience' | 'projects'>('about');
    const about = useRef<HTMLDivElement | null>(null);
    const experience = useRef<HTMLDivElement | null>(null);
    const projects = useRef<HTMLDivElement | null>(null);

    const scrollToSection = (elementRef: React.RefObject<HTMLElement | null>) => {
        if (elementRef.current) {
            window.scrollTo({
                top: elementRef.current.offsetTop,
                behavior: 'smooth',
            });
        }
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
            <Cursor />
            <div className='fixed pt-40 max-lg:static'>
                <motion.h1
                    custom={1}
                    variants={textAnimation}
                    initial='hidden'
                    whileInView='visible'
                    className='text-slate-200 font-bold text-5xl'
                >
                    Nazarii Korchevskyi
                </motion.h1>
                <motion.p
                    custom={2}
                    variants={textAnimation}
                    initial='hidden'
                    whileInView='visible'
                    className='text-slate-200 text-xl pt-2'
                >
                    Software Engineer
                </motion.p>
                <motion.p
                    custom={3}
                    variants={textAnimation}
                    initial='hidden'
                    whileInView='visible'
                    className='text-slate-400 pt-2 max-w-96'
                >
                    I develop web applications combining creativity and functionality.
                </motion.p>
                <motion.nav
                    custom={3}
                    variants={textAnimation}
                    initial='hidden'
                    whileInView='visible'
                    className='flex flex-col gap-6 pt-20'
                >
                    <UiLink
                        isActive={activeLink === 'about'}
                        onClick={() => {
                            setActiveLink('about');
                            scrollToSection(about);
                        }}
                    >
                        about
                    </UiLink>
                    <UiLink
                        isActive={activeLink === 'experience'}
                        onClick={() => {
                            setActiveLink('experience');
                            scrollToSection(experience);
                        }}
                    >
                        experience
                    </UiLink>
                    <UiLink
                        isActive={activeLink === 'projects'}
                        onClick={() => {
                            setActiveLink('projects');
                            scrollToSection(projects);
                        }}
                    >
                        projects
                    </UiLink>
                </motion.nav>
                <motion.div
                    custom={4}
                    variants={textAnimation}
                    initial='hidden'
                    whileInView='visible'
                    className='flex gap-4 pt-32'
                >
                    <Link
                        href='https://github.com/oXide0'
                        target='_blank'
                        className='text-slate-400 hover:text-slate-100'
                    >
                        <AiFillGithub size='2em' />
                    </Link>
                    <Link
                        href='https://www.linkedin.com/in/nazar-korchevskyi/'
                        target='_blank'
                        className='text-slate-400 hover:text-slate-100'
                    >
                        <AiFillLinkedin size='2em' />
                    </Link>
                    <Link
                        href='/Korchevskyi_Nazarii_Developer.pdf'
                        target='_blank'
                        className='text-slate-400 hover:text-slate-100'
                    >
                        <AiFillFilePdf size='2em' />
                    </Link>
                    <button
                        onClick={() => {
                            navigator.clipboard.writeText('nazar.korchevskyi1@gmail.com');
                            alert('Email copied to clipboard!');
                        }}
                        className='text-slate-400 hover:text-slate-100'
                    >
                        <MdEmail size='2em' />
                    </button>
                </motion.div>
            </div>
            <div className='w-80 h-80 opacity-60 rounded-full bg-teal-600 shadow-2xl shadow-teal-600 fixed top-0 left-0 pointer-events-none -z-10 blur-3xl'></div>
            <div className='w-80 h-80 opacity-60 rounded-full bg-teal-600 shadow-2xl shadow-teal-600 fixed bottom-0 right-0 pointer-events-none -z-10 blur-3xl'></div>
            <div className='pl-[600px] max-xl:pl-[500px] max-lg:pl-0'>
                <motion.div
                    variants={blockAnimation}
                    initial='hidden'
                    whileInView='visible'
                    ref={about}
                    className='pt-40'
                >
                    <h2 className='text-slate-100 text-4xl font-bold uppercase text-center'>About me</h2>
                    <p className='text-slate-300 text-md pt-10'>
                        Starting in 2022, I began my journey into web development 🌍, learning step by step and
                        continuously improving my skills as a software engineer 💻. I started with the fundamentals HTML
                        and CSS and gradually expanded my knowledge to more advanced technologies.
                    </p>
                    <p className='text-slate-300 text-md pt-6'>
                        As I progressed, I discovered a deep passion for web development ❤️, embracing the challenges
                        and rewarding moments along the way. Through dedication and continuous learning 📚, I have built
                        a solid foundation and am now eager to contribute to innovative and dynamic projects.
                    </p>
                    <p className='text-slate-300 text-md pt-6'>
                        I strive to enhance my expertise, collaborate with experienced professionals 🤝, and take on
                        exciting challenges that push my skills further. My goal is to grow as a web developer and
                        actively participate in projects that make an impact 🌟.
                    </p>
                    <p className='text-slate-300 text-md pt-6'>Let’s create something great together! ✨</p>
                </motion.div>
                <motion.div
                    variants={blockAnimation}
                    initial='hidden'
                    whileInView='visible'
                    className='flex flex-col gap-5 pt-44'
                    ref={experience}
                >
                    <h2 className='text-slate-100 text-4xl font-bold uppercase text-center'>Experience</h2>
                    {experienceData.map((experience) => (
                        <ExperienceCard key={experience.id} {...experience} />
                    ))}
                </motion.div>
                <motion.div
                    variants={blockAnimation}
                    initial='hidden'
                    whileInView='visible'
                    className='pt-44 pb-16'
                    ref={projects}
                >
                    <h2 className='text-slate-100 text-4xl font-bold uppercase text-center'>Projects</h2>
                    <div className='flex flex-col gap-10 pt-10'>
                        {projectsData.map((project) => (
                            <ProjectCard key={project.id} {...project} />
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
}
