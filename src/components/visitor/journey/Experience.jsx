import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export default function Experience({ experience, order }) {
    return (
        <div className={`grid grid-cols-12 overflow-x-hidden w-full`}>
            <AnimationOnScroll animateIn={`animate__${order % 2 == 0 ? "bounceInRight" : "bounceInLeft"}`} duration={2} style={{ order: order % 2 == 0 ? "0" : "2" }} className='col-span-10 sm:col-span-5'>
                <div className={`flex justify-end ${order % 2 == 0 ? "sm:justify-end" : "sm:justify-start"}`}>
                    <div className={`p-6 bg-primary text-white rounded-md border-b-4 border-yellow-500`}>
                        <strong className='text-2xl capitalize'>{experience.position}</strong><br />
                        <span className='text-sm font-bold text-secondary capitalize'>{experience.name}</span><br />
                        <span className='text-sm'>{experience.description}</span><br />
                        <div className='block sm:hidden text-gray-400 mt-2'>{experience.date}</div>
                    </div>
                </div>
            </AnimationOnScroll>
            <div className='col-span-2 justify-self-center relative' style={{ order: 1 }}>
                <div className={` bg-white w-1 min-h-full absolute`}></div>
                <AnimationOnScroll animateIn="animate__bounceIn" duration={2} className='w-full absolute flex justify-center'>
                    <div className={`rounded-full w-[60px] h-[60px] absolute bg-cover bg-white`} style={{ backgroundImage: `url(${process.env.REACT_APP_URL}/${experience?.image})` }}></div>
                </AnimationOnScroll>
            </div>
            <AnimationOnScroll animateIn="animate__bounceIn" duration={2} className='sm:col-span-5 hidden sm:block' style={{ order: order % 2 == 0 ? "2" : "0" }}>
                <div className={`flex ${order % 2 == 0 ? "justify-start" : "justify-end"}`}>
                    <div className={`  text-white flex ${order % 2 == 0 ? "justify-end" : "justify-start"}`}>
                        <div className={`flex h-[60px] items-center`}>{experience.date}</div>
                    </div>
                </div>
            </AnimationOnScroll>
        </div>
    )
}
