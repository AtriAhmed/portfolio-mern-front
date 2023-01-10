import React from 'react'
import Tilt from 'react-parallax-tilt';
import './About.css'

export default function About() {
  return (
    <div className='container pt-5'>
      {/* <div>&lt;div className='container'&gt;</div>
      <div className='px-4'>&lt;div className='row'&gt;</div> */}
      <div className='row'>
        <div className='col-12 col-sm-10 col-md-8 col-lg-6 col-xl-6 pt-5'>
          <div style={{ fontSize: '16px' }}>
            <div className='animate__animated animate__fadeInUp a1'>
            <h1><strong>Who am I ?</strong></h1>
            <p>I am a 2nd year Computer Siences and Multimedia Engeneering Student and a
              fullstack developer freelancer Who really adore developement and always exited to learn new technologies or work on new projects</p>
            </div>
            <div className='animate__animated animate__fadeInUp a2'>
            <h1><strong>Why you may hire me ?</strong></h1>
            <p>Am a problem solver, i always work with best practice principe which leads to optimised and secure code, i have a good adapdability which allow me to lean new technologies fastly
            </p>
            </div>
            <div className='animate__animated animate__fadeInUp a3'>
            <h1><strong>What i can do ?</strong></h1>
            <p>I master react and laravel but i know many other technologies that you can see in skills section, i made many interesing projects that you can try now in work section
            </p>
            </div>
            <div className='animate__animated animate__fadeInUp a4'>
            <h1><strong>What am looking for right now ?</strong></h1>
            <p>Am looking for a remote internship / part time job, contact me if interested !!
            </p>
            </div>
          </div>
        </div>
        <div className='col-12 col-sm-10 col-md-8 col-lg-6 col-xl-6'>
          <Tilt>
            <img src='/img/me.jpg' alt='me' className='rounded' />
          </Tilt>
        </div>
      </div>
    </div>
  )
}
