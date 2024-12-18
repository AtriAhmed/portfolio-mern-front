import React, { useEffect, useState } from 'react'
import './Loading.scss'

export default function Loading() {
  const [currentImage, setImage] = useState('/drawing0.svg')

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setImage('/drawing1.svg')
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setImage('/drawing2.svg')
    }, 200);
    return () => clearTimeout(timer);
  }, []);  
  useEffect(() => {
    const timer = setTimeout(() => {
      setImage('/drawing3.svg')
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImage('/drawing.svg')
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='body' style={{display:'flex',alignItems:'center',justifyContent:'center',height:'75vh'}}>
<img src={currentImage} alt='react logo' width='50%'/>
    </div>
  )
} 