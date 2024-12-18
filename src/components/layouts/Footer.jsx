import { IonIcon } from '@ionic/react'
import { logoGithub, logoLinkedin } from 'ionicons/icons'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black text-white pb-8'>

      <div className=' flex items-center justify-center gap-8 p-5'>
        <a href='https://github.com/AtriAhmed' target="_blank" rel='noreferrer' className='font-bold flex items-center justify-between gap-2'><IonIcon icon={logoGithub} className='text-xl' /> Github</a>
        <a href='https://www.linkedin.com/in/ahmed-atri-5564601b2' target="_blank" rel='noreferrer' className='font-bold flex items-center justify-between gap-1'><IonIcon icon={logoLinkedin} className='text-xl' /> <span >Linkedin</span></a>
      </div>
      <div className='flex justify-center font-bold'>© Copyright 2024 | Ahmed Atri</div>
    </div>
  )
}
