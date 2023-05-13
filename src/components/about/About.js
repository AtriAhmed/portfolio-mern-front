import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Tilt from 'react-parallax-tilt';
import Swal from 'sweetalert2';
import Loading from '../Loading';
import './About.css'
import AboutCmp from './AboutCmp';

export default function About() {
  const [loading, setLoading] = useState(true);

  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    async function getAbouts() {
      axios.get('/get-about').then((res) => {
        setAbouts(res.data);
      }).catch(err => {
        Swal.fire("Error", err.response.data.message, "error")
      }).finally(res => {
        setLoading(false)
      })


    }

    getAbouts();

    return;
  }, [abouts.length]);

  if (loading) {
    return (<div>
      <Loading />
    </div>)
  }
  return (
    <div className='max-w-7xl mx-auto'>
      <div className='grid grid-cols-12 gap-4'>
        <div className='hidden sm:block sm:col-span-1 md:col-span-2 lg:hidden'></div>
        <div className='col-span-12 sm:col-span-10 md:col-span-8 lg:col-span-6 pt-5'>

          {abouts.map(about => <AboutCmp key={about._id} title={about.title} content={about.content} />)}

        </div>
        <div className='hidden sm:block sm:col-span-1 md:col-span-2 lg:hidden'></div>
        <div className='hidden sm:block sm:col-span-1 md:col-span-2 lg:hidden'></div>
        <div className='col-span-12 sm:col-span-10 md:col-span-8 lg:col-span-6 pt-9 flex justify-center'>
          <Tilt>
            <img src='/img/me.jpg' alt='me' className='rounded' />
          </Tilt>
        </div>
      </div>
    </div>
  )
}
