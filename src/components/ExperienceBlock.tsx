import { memo } from 'react';
import Chip from './Chip';

interface ExperienceBlockProps {
    title: string;
    text: string[];
    skills: string[];
    date: string;
    company: string;
}

const ExperienceBlock = memo(({ title, text, skills, date, company }: ExperienceBlockProps) => {
    return (
        <div className='flex p-4 rounded-lg transition-all duration-200 hover:bg-slate-100/10 group relative'>
            <div>
                <p className='text-slate-400 text-sm w-40'>{date}</p>
            </div>
            <div>
                <h1 className='text-slate-100 font-medium text-md group-hover:text-teal-300'>
                    {title} · {company}
                </h1>
                <p className='text-slate-400 pt-2 text-sm'>
                    {text.map((sen) => (
                        <p>- {sen}</p>
                    ))}
                </p>
                <div className='flex gap-2 flex-wrap pt-3'>
                    {skills.map((skill, index) => (
                        <Chip key={index}>{skill}</Chip>
                    ))}
                </div>
            </div>
        </div>
    );
});

export default ExperienceBlock;
