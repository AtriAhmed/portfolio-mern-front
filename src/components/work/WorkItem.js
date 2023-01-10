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
    <div className={`col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-2 overflow-hidden`} style={{backgroundImage:`url(http://192.168.1.8:5000/${props.work.image})`,backgroundSize:'cover',height:'200px',backgroundPosition:'center',backgroundClip: 'content-box',borderRadius:'20px',position:'relative'}} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
      <div className={`w-100 h-100 d-flex align-items-end ${hovered ? 'animate__animated animate__fadeInUp':'animate__animated animate__fadeOutDown'}`} style={{background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)'}}>

    <div className={`text-light  px-4 p-2 `} style={{position:'absolute'}}>
    <strong style={{fontSize:'18px'}}>{props.work.name}</strong><br/>
      <span style={{fontSize:'16px'}}>{props.work.description}</span><br/>
      <span style={{fontSize:'14px'}}>{props.work.technologies}</span><br/>
      </div>
      </div>
  </div>
  )
}