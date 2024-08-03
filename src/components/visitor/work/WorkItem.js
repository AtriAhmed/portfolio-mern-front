import React, { useState } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Tilt from 'react-parallax-tilt';

export default function WorkItem({ work, index }) {
  // const [hovered, setHovered] = useState(false)

  // const mouseEnterHandler = (e) => {
  //   setHovered(true)
  // }

  // const mouseLeaveHandler = (e) => {
  //   setHovered(false)
  // }

  return (
    <AnimationOnScroll animateIn="animate__slideInUp" className='col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4' duration={2} delay={index * 250}>
      <a href={work.link} target="_blank" rel="noreferrer">
        <Tilt className={`rounded-xl relative bg-primary p-8 h-full`}
        // onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
        >
          <div className="h-[200px] absolute inset-4 overflow-hidden rounded-xl">
            <img src={`${process.env.REACT_APP_URL}/${work.image}`} alt={work.name} className="absolute inset-0 w-full h-full object-cover rounded-xl" />
          </div>
          <div className='flex flex-col gap-4 justify-between h-full pt-[208px]'>
            <div className='flex flex-col gap-4'>
              <div className='text-3xl font-bold'>{work.name}</div>
              <div>{work.description}</div>
            </div>
            <div className='text-secondary'>{work.technologies}</div>
          </div>
        </Tilt>
      </a>
    </AnimationOnScroll>
  )
}