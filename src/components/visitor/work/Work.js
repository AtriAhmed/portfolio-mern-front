import axios from 'axios';
import React, { useEffect, useState } from 'react'
import WorkItem from './WorkItem';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Loading from '../../Loading';


export default function Work() {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getWorks() {
      axios.get(`/get-all-work/`).then(res => {
        if (!res.data) {
          const message = `An error occured: ${res.statusText}`;
          window.alert(message);
          return;
        }
        setWorks(res.data);
        setLoading(false)
      })
    }

    getWorks();

    return;
  }, [works.length]);

  function WorksList() {
    return works.map((work, index) => {
      return (
        <WorkItem
          work={work}
          index={index}
          key={work._id}
        />
      );
    });
  }
  if (loading) {
    return (<div>
      <Loading />
    </div>)
  }
  return (
    <div id='work' className='min-h-screen flex flex-col justify-center my-20'>
      <div className='mx-auto max-w-7xl'>
        <AnimationOnScroll animateIn="animate__fadeInUp" duration={2}>
          <div className="mb-16">
            <strong className="text-yellow-500">MY WORK</strong>
            <hr></hr>
            <div className="text-5xl font-black">Projects</div>
          </div>
        </AnimationOnScroll >
        <div className='grid grid-cols-12 gap-4'>
          {WorksList()}
        </div>
      </div>
    </div>
  )
}
