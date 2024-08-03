import React, { useEffect, useState } from 'react'
import { IonIcon } from '@ionic/react';
import { starOutline, star } from 'ionicons/icons'

export default function Skill(props) {
  const [hovered, setHovered] = useState(false)
  const [stars, setStars] = useState([])


  function addStar(index) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        setStars(prev => {
          const arr = [...prev];
          arr[index] = index < props.skill.level ? <IonIcon icon={star} style={{ animation: "zoom .3s linear" }} key={index} className='text-xl' /> : <IonIcon icon={starOutline} className='text-xl' style={{ animation: "zoom .3s linear" }} key={index} />
          return arr
        })
        res();
      }, 200)
    })
  }

  useEffect(() => {

    async function addStars() {
      for (var i = 0; i < 5; i++) {
        await addStar(i)
      }
    }

    addStars()
  }, [props.skill.level])

  const mouseEnterHandler = (e) => {
    setHovered(true)
  }

  const mouseLeaveHandler = (e) => {
    setHovered(false)
  }

  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4 mb-2">
      <div style={hovered ? { transition: '0.4s', scale: '1.1' } : { transition: '0.4s', scale: '1' }} className={` border-0 p-4`} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6 capitalize"> <strong style={{ fontSize: '18px' }}>{props.skill.name}</strong></div>
          <div className="col-span-6 flex items-center" >{stars}</div>
        </div>

      </div>
    </div>
  );
}