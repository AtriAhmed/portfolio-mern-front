import React from 'react'

export default function CVWork(props) {
    return (
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4">
            <div className="">
                <div className='font-bold text-xs'>{props.work?.name}</div>
                <div className='text-xs'>{props.work?.description}</div>
                <div className='text-xs'>{props.work?.technologies}</div>
                <div className='text-xs'>{props.work?.link}</div>
            </div>
        </div>
    )
}
