import React from 'react'

export default function AboutCmp(props) {
    return (
        <div className='animate__animated animate__fadeInUp a1 text-center lg:text-start'>
            <h1 className='text-4xl mt-4 mb-1'><strong>{props.title}</strong></h1>
            <p className='lg:text-justify'>{props.content}</p>
        </div>
    )
}
