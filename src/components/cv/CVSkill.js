import React, { useEffect, useState } from 'react'
import { IonIcon } from '@ionic/react';
import { starOutline, star } from 'ionicons/icons'

export default function CVSkill(props) {

    return (
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6 text-xs">
            <div className={` border-0`}>
                <div className="capitalize"> {props.skill.name}</div>
            </div>
        </div>
    );
}