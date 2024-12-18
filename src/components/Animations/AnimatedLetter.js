import React, { useState } from 'react'

export default function AnimatedLetter(props) {
    const [hovered, setHovered] = useState(false)

    const mouseEnterHandler = (e) =>{    
        setHovered(true)
    }

    const mouseLeaveHandler = (e) =>{    
      setHovered(false)
    }

  return (
    <div style={hovered ? {transition:'0.4s',transform:'scaleY(1.5)'} : {transition:'0.4s',scale:'1'}} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>{props.letter}</div>
  )
}
