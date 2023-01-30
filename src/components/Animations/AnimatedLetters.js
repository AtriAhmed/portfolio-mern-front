import React from 'react'
import AnimatedLetter from './AnimatedLetter'

export default function AnimatedLetters(props) {
    
    let words = props.word.split(" ")

  return (
    <div className='flex gap-4 justify-center'>
        {words.map((word,index)=>{
            let letters = word.split("")
            return <div key={index} className='flex items-end'>
                {letters.map((letter,i)=>{
                    return <AnimatedLetter key={i} letter={letter}/>
                })}
            </div>
        })}
    </div>
  )
}
