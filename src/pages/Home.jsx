import React from 'react'
import About from '../components/visitor/about/About'
import Journey from '../components/visitor/journey/Journey'
import Work from '../components/visitor/work/Work'
import Contact from '../components/visitor/contact/Contact'
import Skills from '../components/visitor/skills/Skills'
import CV from '../components/visitor/cv/CV'

export default function Home() {
    return (
        <div className=''>
            <About />
            <Journey />
            <Work />
            <Skills />
            <Contact />
            <CV />
        </div>
    )
}
