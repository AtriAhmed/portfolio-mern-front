import React from 'react'

export default function Experience(props) {
    return (
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4">
            <div className="p-4">
                <strong style={{ fontSize: '18px' }}>{props.experience.name}</strong><br />
                <span style={{ fontSize: '14px' }}>{props.experience.position}</span><br />
                <span style={{ fontSize: '12px' }}>{props.experience.date}</span><br />
                <span style={{ fontSize: '16px' }}>{props.experience.description}</span><br />
            </div>
        </div>
    )
}
