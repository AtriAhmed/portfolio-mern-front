import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from '../Loading';
import WorkItem from './WorkItem';

export default function Work() {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getWorks() {
      axios.get(`/get-all-work/`).then(res=>{
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
    return works.map((work) => {
      return (
        <WorkItem
          work={work}
          key={work._id}
        />
      );
    });
  }
  if(loading){
    return (<div>
      <Loading/>
    </div>)
  }
  return (
    <div className='mx-auto max-w-7xl mt-5 pt-5'>
    <div className='grid grid-cols-12 gap-4'>
        {WorksList()}
    </div>
    </div>
  )
}
