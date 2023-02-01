import React, { useState } from 'react'

export default function WorkItem(props) {
  const [hovered,setHovered] = useState(false)

  const mouseEnterHandler = (e) =>{    
    setHovered(true)
}

const mouseLeaveHandler = (e) =>{    
  setHovered(false)
}

  return (
    <a href={props.work.link} target="_blank" rel="noreferrer"  className={`col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 mb-2 overflow-hidden`} style={{backgroundImage:`url(${process.env.REACT_APP_URL}/${props.work.image})`,backgroundSize:'cover',height:'200px',backgroundPosition:'center',backgroundClip: 'content-box',borderRadius:'20px',position:'relative'}} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
      <div className={`w-full h-full flex items-end ${hovered ? 'animate__animated animate__fadeInUp':'animate__animated animate__fadeOutDown'}`} style={{background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)'}}>

    <div className={`text-white  px-4 p-2 `} style={{position:'absolute'}}>
    <strong>{props.work.name}</strong><br/>
      <span>{props.work.description}</span><br/>
      <span>{props.work.technologies}</span><br/>
      </div>
      </div>
  </a>
  )
}