import Image from 'next/image';
import { GoArrowUpRight } from 'react-icons/go';

interface ProjectCardProps {
    title: string;
    text: string;
    skills: string[];
    url: string;
    href: string;
}

export function ProjectCard({ title, text, skills, url, href }: ProjectCardProps) {
    return (
        <div
            className='flex items-start gap-4 cursor-pointer p-4 rounded-lg transition-all duration-200 hover:bg-slate-100/10 group relative'
            onClick={() => window.open(href, '_blank')}
        >
            <GoArrowUpRight size='1.5em' className='absolute right-3 text-slate-400 group-hover:text-slate-100' />
            <Image
                src={`/${url}.png`}
                alt='project'
                className='rounded-sm w-40 h-20 object-cover'
                width={200}
                height={200}
            />
            <div>
                <h1 className='text-slate-100 font-medium text-md group-hover:text-teal-300 -mt-1.5'>{title}</h1>
                <p className='text-slate-400 text-sm'>{text}</p>
                <div className='flex gap-2 flex-wrap pt-3'>
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className='bg-teal-400/20 rounded-2xl uppercase px-2 py-1 text-teal-200 text-xs'
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
