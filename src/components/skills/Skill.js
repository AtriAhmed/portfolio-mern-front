import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react'

export default function Skill(props) {
  const [hovered, setHovered] = useState(false)
  const [stars, setStars] = useState([])
  

  function addStar(index){
    return new Promise((res, rej)=>{
      setTimeout(()=>{
        setStars(prev => {
          const arr = [...prev];
          arr[index] = index < props.skill.level ? <FontAwesomeIcon icon="fas fa-star" style={{animation:"zoom .3s linear"}} key={index} /> : <FontAwesomeIcon icon="far fa-star" style={{animation:"zoom .3s linear"}} key={index} />
          return arr
        })
        res();
      },200)
    })
  }

  useEffect(()=>{

    async function addStars(){
      for (var i = 0; i<5; i++){
        await addStar(i)
      }
    }
      
      addStars()
  },[props.skill.level])
    
    const tableau = ['1','2','3','4','5']

    const mouseEnterHandler = (e) =>{    
        setHovered(true)
    }

    const mouseLeaveHandler = (e) =>{    
      setHovered(false)
    }

    return(
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-2">
            <div style={hovered ? {transition:'0.4s',scale:'1.1'} : {transition:'0.4s',scale:'1'}} className={`card border-0 p-4`} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
              <div className="row">
                <div className="col-6"> <strong style={{fontSize:'18px'}}>{props.skill.name}</strong></div>
                {/* <div className="col-6 text-primary">
              {tableau.map((x,i)=>
       {return (x <= props.skill.level ? <FontAwesomeIcon icon="fas fa-star" key={i} /> : <FontAwesomeIcon icon="far fa-star" key={i} />)}
    )}    
                </div> */}
                <div className="col-6 text-primary" >{stars}</div>
              </div>
           
            </div>
          </div>
  );
}