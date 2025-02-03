interface ExperienceCardProps {
    title: string;
    text: string[];
    skills: string[];
    date: string;
    company: string;
}

export function ExperienceCard({ title, text, skills, date, company }: ExperienceCardProps) {
    return (
        <div className='flex p-4 rounded-lg transition-all duration-200 hover:bg-slate-100/10 group relative'>
            <div>
                <p className='text-slate-400 text-sm w-40'>{date}</p>
            </div>
            <div>
                <h1 className='text-slate-100 font-medium text-md group-hover:text-teal-300'>
                    {title} · {company}
                </h1>
                <ul className='text-slate-400 pt-2 text-sm flex flex-col gap-2 list-disc list-inside marker:text-[#4afad1]'>
                    {text.map((sen, index) => (
                        <li key={index} className='pl-2'>
                            {sen}
                        </li>
                    ))}
                </ul>
                <ul className='flex gap-2 flex-wrap pt-3'>
                    {skills.map((skill, index) => (
                        <li
                            key={index}
                            className='bg-teal-400/20 rounded-2xl uppercase px-2 py-1 text-teal-200 text-xs'
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
