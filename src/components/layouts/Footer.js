import { IonIcon } from '@ionic/react'
import { logoGithub } from 'ionicons/icons'
import React from 'react'

export default function Footer() {
  return (
    <div className='flex items-center justify-center p-5'>
      <a href='https://github.com/AtriAhmed' target="_blank" rel='noreferrer' className='font-bold flex items-center justify-between gap-2'><IonIcon icon={logoGithub} className='text-xl' /> Github</a>
    </div>
  )
}
