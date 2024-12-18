import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from '../Loading';
import CVSkill from './CVSkill';
import { IonIcon } from '@ionic/react';
import { calendar, call, globe, location, logoGithub, logoLinkedin } from 'ionicons/icons';
import CVExperience from './CVExperience';
import CVWork from './CVWork';

export default function CVCmp() {
    const [experience, setExperience] = useState([]);
    const [works, setWorks] = useState([]);
    const [loading, setLoading] = useState(true);

    // This method fetches the records from the database.
    useEffect(() => {
        function getExperience() {
            axios.get(`/get-all-experience/`).then(res => {
                if (!res.data) {
                    const message = `An error occured: ${res.statusText}`;
                    window.alert(message);
                    return;
                }
                setExperience(res.data);
                setLoading(false);
            })
        }

        getExperience();

        return;
    }, [experience.length]);

    useEffect(() => {
        async function getWorks() {
            axios.get(`/get-all-work/`).then(res => {
                if (!res.data) {
                    const message = `An error occured: ${res.statusText}`;
                    window.alert(message);
                    return;
                }
                setWorks(res.data);
                setLoading(false)
            })
        }

        getWorks();

        return;
    }, [works.length]);

    const [skills, setSkills] = useState([]);
    useEffect(() => {
        async function getSkills() {
            axios.get('/get-types-with-skills').then((res) => {
                if (!res.status === 200) {
                    const message = `An error occured: ${res.statusText}`;
                    window.alert(message);
                    return;
                }

                setSkills(res.data);
            })


        }

        getSkills();

        return;
    }, [skills.length]);

    function SkillsList() {
        return skills.map((type, i) => {
            return (
                <div className="" key={i}>
                    <div className='font-bold border-b pb-1'>{type.name == "Skills" ? "Tech Skills" : type.name}</div>
                    <div className="grid grid-cols-12 gap-1">
                        {type.skills.map((skill) => {
                            return (
                                <CVSkill
                                    skill={skill}
                                    key={skill._id}
                                />
                            )
                        })}
                    </div>
                </div>
            );
        });
    }

    function ExperienceList() {
        return experience.map((experience) => {
            return (
                <CVExperience
                    experience={experience}
                    key={experience._id}
                />
            );
        });
    }

    function WorksList() {
        return works.map((work) => {
            return (
                <CVWork
                    work={work}
                    key={work._id}
                />
            );
        });
    }

    if (loading) {
        return (<div>
            <Loading />
        </div>)
    }
    return (
        <div className='mx-auto grid grid-cols-12 h-[920px] w-[600px] shadow-xl overflow-hidden' >
            <div className='col-span-4 bg-gray-100'>
                <div className='bg-black text-white flex flex-col gap-4 p-3 justify-center items-center'>
                    <div className='font-bold'>
                        <div className='text-xl'>Ahmed Atri</div>
                        <div className='text-base'>Web developer</div>
                    </div>
                    <div className='font-medium text-xs break-all'>
                        <div className='flex gap-2'> ahmedatri@gmail.com</div>
                        <div className='flex gap-2'><IonIcon icon={call} className='text-base' />+216 26046441</div>
                        <div className='flex gap-2'><IonIcon icon={location} className='text-base' />Sfax, Tunisia</div>
                        <div className='flex gap-2'><IonIcon icon={logoGithub} className='text-base' />https://github.com/<br />AtriAhmed</div>
                        <div className='flex gap-2'><IonIcon icon={logoLinkedin} className='text-base' />https://www.linkedin.com<br />/in/ahmed-atri-5564601b2</div>
                        <div className='flex gap-2'><IonIcon icon={globe} className='text-base' />www.ahmedatri.com</div>
                    </div>
                </div>

                <div className='p-5'>
                    <div>
                        <div className='font-bold text-base border-b pb-1'>Education</div>
                        <div className='text-xs'>Institute of Computer Science and Multimedia Studies of Sfax</div>
                        <div className='text-xs flex gap-2 items-center'><IonIcon icon={calendar} className='text-gray-400' /> september 2018 - Present</div>
                        <div className='text-xs flex gap-2 items-center'><IonIcon icon={location} className='text-gray-400' /> Sfax, Tunisia</div>
                    </div>
                    <div className='flex flex-col gap-2 pt-3'>
                        {SkillsList()}
                    </div>
                </div>
            </div>
            <div className='col-span-8'>
                <div className='p-6 pt-3 pb-1'>
                    <div className='font-bold text-base border-b pb-1'>Summary</div>
                    <div className='text-xs text-justify'>
                        I am Ahmed Atri, a software engineering student specializing in full-stack web development. With freelance experience, I deliver successful projects on time and within budget. I prioritize data security and create responsive designs. Proficient in React and ExpressJS, I adapt quickly to new technologies. Currently seeking an internship or part-time job to complement my academic program.
                    </div>
                </div>
                <div className='p-6 pt-1'>
                    <div className='font-bold text-base border-b pb-1'>Work experience</div>
                    <div className='pl-4'>
                        <div>
                            <div className='font-semibold text-sm'>Freelance</div>
                            <div className='py-1 pl-4 flex flex-col gap-2'>
                                {WorksList()}
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            {ExperienceList()}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
