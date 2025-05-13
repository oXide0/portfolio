'use client';

import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { AiFillFilePdf, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { blockAnimation, textAnimation } from './lib/animation';
import { experienceData, projectsData } from './lib/data';
import { Cursor } from './ui/cursor';
import { ExperienceCard } from './ui/experienceCard';
import { Link as UiLink } from './ui/link';
import { ProjectCard } from './ui/projectCard';

export default function Home() {
    const [activeLink, setActiveLink] = useState<'about' | 'experience' | 'projects' | 'contact'>('about');
    const about = useRef<HTMLDivElement | null>(null);
    const experience = useRef<HTMLDivElement | null>(null);
    const projects = useRef<HTMLDivElement | null>(null);
    const contact = useRef<HTMLDivElement | null>(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSent, setIsSent] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs
            .send(
                process.env.NEXT_PUBLIC_SERVICE_ID!,
                process.env.NEXT_PUBLIC_TEMPLATE_ID!,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message
                },
                process.env.NEXT_PUBLIC_PUBLIC_KEY!
            )
            .then(
                () => {
                    setIsSent(true);
                    setFormData({ name: '', email: '', message: '' });
                    setTimeout(() => setIsSent(false), 3000);
                },
                (error) => {
                    console.error('Failed to send message', error);
                    alert('Failed to send message');
                }
            );
    };

    const scrollToSection = (elementRef: React.RefObject<HTMLElement | null>) => {
        if (elementRef.current) {
            window.scrollTo({
                top: elementRef.current.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (experience.current && projects.current && contact.current && about.current) {
                const scrollPosition = window.scrollY + 200;

                if (scrollPosition >= experience.current.offsetTop && scrollPosition < projects.current.offsetTop) {
                    setActiveLink('experience');
                } else if (scrollPosition >= projects.current.offsetTop && scrollPosition < contact.current.offsetTop) {
                    setActiveLink('projects');
                } else if (scrollPosition >= contact.current.offsetTop) {
                    setActiveLink('contact');
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
        <div className='max-w-7xl mx-auto px-4 flex max-lg:flex-col max-lg:px-10 '>
            <Cursor />
            <div className='fixed max-lg:static flex flex-col gap-20 h-screen justify-center'>
                <div>
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
                </div>
                <motion.nav
                    custom={3}
                    variants={textAnimation}
                    initial='hidden'
                    whileInView='visible'
                    className='flex flex-col gap-6'
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
                    <UiLink
                        isActive={activeLink === 'contact'}
                        onClick={() => {
                            setActiveLink('contact');
                            scrollToSection(contact);
                        }}
                    >
                        contact
                    </UiLink>
                </motion.nav>

                <motion.div
                    custom={4}
                    variants={textAnimation}
                    initial='hidden'
                    whileInView='visible'
                    className='flex gap-4'
                >
                    <Link
                        href='https://github.com/oXide0'
                        target='_blank'
                        className='text-slate-400 hover:text-slate-100'
                        aria-label='GitHub Profile'
                    >
                        <AiFillGithub size='2em' />
                    </Link>
                    <Link
                        href='https://www.linkedin.com/in/nazar-korchevskyi/'
                        target='_blank'
                        className='text-slate-400 hover:text-slate-100'
                        aria-label='LinkedIn Profile'
                    >
                        <AiFillLinkedin size='2em' />
                    </Link>
                    <Link
                        href='/Nazarii_Korchevskyi_Developer.pdf'
                        target='_blank'
                        className='text-slate-400 hover:text-slate-100'
                        aria-label='See Resume'
                    >
                        <AiFillFilePdf size='2em' />
                    </Link>
                    <button
                        aria-label='Copy Email Address'
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
                <motion.div
                    variants={blockAnimation}
                    initial='hidden'
                    whileInView='visible'
                    className='pt-44 pb-16 flex flex-col items-center'
                    ref={contact}
                >
                    <h2 className='text-slate-100 text-4xl font-bold uppercase text-center'>Contact Me</h2>
                    <p className='text-slate-300 text-md pt-6 text-center'>
                        Have a question or want to work together? Feel free to reach out! 📩
                    </p>

                    <form
                        onSubmit={sendEmail}
                        className='mt-10 w-full max-w-lg bg-slate-800/50 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-slate-700'
                    >
                        <div className='flex flex-col gap-4'>
                            <input
                                type='text'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Your Name'
                                className='p-3 bg-slate-700 text-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-teal-400'
                                required
                            />
                            <input
                                type='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Your Email'
                                className='p-3 bg-slate-700 text-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-teal-400'
                                required
                            />
                            <textarea
                                rows={5}
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                placeholder='Your Message'
                                className='p-3 bg-slate-700 text-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-teal-400'
                                required
                            ></textarea>
                            <button
                                type='submit'
                                className='mt-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition-all'
                            >
                                Send Message 🚀
                            </button>
                            {isSent && <p className='text-green-400 text-center mt-2'>Message sent successfully! ✅</p>}
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
