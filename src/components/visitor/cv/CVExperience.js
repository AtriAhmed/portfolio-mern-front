import { IonIcon } from '@ionic/react'
import { calendar } from 'ionicons/icons'
import React from 'react'

export default function CVExperience(props) {
    return (
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4">
            <div className="">
                <div className='text-sm font-bold'>{props.experience.name}</div>
                <div className='text-xs'>{props.experience.position}</div>
                <div className='flex gap-2 items-center text-xs'><IonIcon icon={calendar} className='text-gray-400' />{props.experience.date}</div>
                <div className='text-xs'>{props.experience.description}</div>
            </div>
        </div>
    )
}
